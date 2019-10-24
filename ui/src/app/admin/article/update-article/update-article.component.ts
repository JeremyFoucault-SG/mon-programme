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

  articleForm = this.fb.group({
    file: this.fb.group({
      id: [],
      url: [],
    }),
    title: [],
    category: [],
    content: [],
    tags: this.fb.array([])
  });

  constructor(
    private store: Store,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private router: Router,
    public httpClient: HttpClient,
    private uploaderService: UploadService
  ) {}
  editArticle = false;

  @Select(ArticleState.article)
  selectedArticle: Observable<ArticleBlog>;

  @Select(ArticleState.articles)
  query: Observable<QueryArticles[]>;

  @Output()
  uploadFinished = new EventEmitter<{ photo: { id: string; url: string } }>();

  ngOnInit() {
    this.selectedArticle.subscribe(item => {
      if (item) {
        this.articleForm.patchValue({
          id: item._id,
          file: item.file,
          title: item.title,
          category: item.category,
          tag: item.tags,
          content: item.content
        });
        this.editArticle = true;
      } else {
        this.editArticle = false;
      }
    });
    this.store.dispatch(new SearchArticle({ limit: 4 }));
  }

  onSubmit() {
    if (this.editArticle) {
      this.uploadPhoto()
        .pipe(
          switchMap(() =>
            this.store.dispatch(
              new UpdateArticle(
                this.articleForm.value,
                this.articleForm.value.id
              )
            )
          )
        )
        .subscribe(() => {
          // tslint:disable-next-line: no-unused-expression
          this.showSuccessUpdate();
          this.router.navigate(['articles']);
        });
    } else {
      this.uploadPhoto()
        .pipe(
          switchMap(() => {
            return this.store.dispatch(new AddArticle(this.articleForm.value))
          })
        )
        .subscribe(() => {
          this.showSuccesAdd();
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
  }

  onRemoveFile() {
    this.file = [];
  }

  uploadPhoto(): Observable<any> {
    if (this.file) {
      return this.uploaderService
        .upload(this.sendableFormData)
        .pipe(map(res => this.articleForm.get('file').patchValue(res)));
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

