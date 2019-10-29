import {Component, OnInit, ViewChild, EventEmitter, Output} from '@angular/core';
import { FormControl, FormBuilder, Validators, FormArray} from '@angular/forms';
import { Store, Select } from '@ngxs/store';
import { ArticleBlog } from 'src/app/shared/models/articles-blog.model';
import { UpdateArticle, AddArticle, SetSelectedArticle, SearchArticle,
  DeleteArticle} from 'src/app/core/store/store.module/article/article.actions';
import { Router } from '@angular/router';
import { ngfModule, ngf } from 'angular-file';
import { ArticleState } from 'src/app/core/store/store.module/article/article.state';
import { Observable, Subscription, of, EMPTY } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { QuillEditorComponent } from 'ngx-quill';
import { QueryArticles } from 'src/app/shared/models/queryArticles.model';
import { HttpClient, HttpEvent, HttpRequest, HttpResponse} from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';
import { UploadService } from 'src/app/core/http/upload.service';
import { Category } from 'src/app/shared/models/category.model';
import { CategoryService } from 'src/app/core/http/category.service';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit {
  accept = '*';
  file: File[] = [];
  progress: number;
  url = 'http://localhost:3000/upload';
  hasBaseDropZoneOver = false;
  httpEmitter: Subscription;
  httpEvent: HttpEvent<{}>;
  lastFileAt: Date;

  sendableFormData: FormData; // populated via ngfFormData directive

  dragFiles: any;
  validComboDrag: any;
  lastInvalids: any;
  fileDropDisabled: any;
  maxSize: any;
  baseDropValid: any;

  @ViewChild('quill', { static: true }) quill: QuillEditorComponent;

  tag = new FormControl(null, Validators.required);
  id: string;
  categories: Category[];

  @Select(ArticleState.articles)
  articles: Observable<ArticleBlog[]>;

  articleForm = this.fb.group({
    image: this.fb.group({
      id: (Validators.required),
      url: (Validators.required),
    }),
    title: new FormControl('', [Validators.required, Validators.minLength(6)]),
    category: new FormControl([], [Validators.required, Validators.minLength(6)]),
    content: new FormControl(Validators.required),
    tags: this.fb.array([]),
  });

  constructor(
    private store: Store,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private router: Router,
    public httpClient: HttpClient,
    private uploaderService: UploadService,
    private categoryService: CategoryService
  ) {}
  editArticle = false;

  @Select(ArticleState.article)
  selectedArticle: Observable<ArticleBlog>;

  @Select(ArticleState.articles)
  query: Observable<QueryArticles[]>;

  @Output()
  uploadFinished = new EventEmitter<{ photo: { id: string; url: string } }>();

  ngOnInit() {
    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
    this.selectedArticle.subscribe(item => {
      if (item) {
        this.articleForm.patchValue({
          image: item.image,
          title: item.title,
          category: item.category,
          tags: item.tags,
          content: item.content
        });
        item.tags.forEach(t => {
          this.tags.push(this.fb.control(t));
        });
        this.editArticle = true;
        this.id = item._id;
      } else {
        this.editArticle = false;
      }
    });
    this.store.dispatch(new SearchArticle({ limit: 4 }));
  }


  onSubmit() {
    if (this.editArticle) {
      console.log(this.articleForm.value);
      this.uploadPhoto()
        .pipe(
          switchMap(() =>
            this.store.dispatch(
              new UpdateArticle(
                this.articleForm.value,
                this.id,
              )

            )
          )
        )
        .subscribe(() => {
          // tslint:disable-next-line: no-unused-expression
          this.showSuccessUpdate();
          this.clearForm();
          this.router.navigate(['articles']);
        });
    } else {
      this.uploadPhoto()
        .pipe(
          switchMap(() => {
            return this.store.dispatch(new AddArticle(this.articleForm.value));
          })
        )
        .subscribe(() => {
          this.showSuccesAdd();
          this.clearForm();
          this.router.navigate(['articles']);
        });
    }
  }

  clearForm() {
    this.articleForm.reset();
    this.store.dispatch(new SetSelectedArticle(this.articleForm.value));
  }

  showSuccesAdd() {
    this.toastr.success('Article ajouté');
  }

  showSuccessUpdate() {
    this.toastr.success('Article mis à jour.');
  }

  showError() {
    // tslint:disable-next-line: quotemark
    this.toastr.error("Impossible de mettre à jour l'article");
  }

  get tags() {
    return this.articleForm.get('tags') as FormArray;
  }

  addTag(value) {
    this.tags.push(this.fb.control(value));
    this.tag.reset();
  }
  onRemoveTag(index: number) {
    this.tags.removeAt(index);
  }
  cancel() {
    this.progress = 0;
    if (this.httpEmitter) {
      this.httpEmitter.unsubscribe();
    }
  }
  deleteArticle(id: string) {
    this.store.dispatch(new DeleteArticle(id));
    this.showSuccessUpdate();
    this.router.navigate(['articles']);
  }

  onRemoveFile() {
    this.file = [];
  }

  uploadPhoto(): Observable<any> {
    if (this.file) {
      return this.uploaderService
        .upload(this.sendableFormData)
        .pipe(map(res => this.articleForm.get('image').patchValue(res)));
    } else {
      return of(EMPTY);
    }
  }

  uploadFiles(): Subscription {
    const req = new HttpRequest<FormData>(
      'POST',
      this.url,
      this.sendableFormData, {
      reportProgress: true// , responseType: 'text'
    });
    return this.httpEmitter = this.httpClient.request(req)
    .subscribe(
      event => {
        this.httpEvent = event;

        if (event instanceof HttpResponse) {
          delete this.httpEmitter;
        }
      },
      error => alert('Error Uploading Files: ' + error.message)
    );
  }
}

