import {
  Component,
  OnInit,
  ViewChild,
  EventEmitter,
  Output
} from '@angular/core';
import {
  FormControl,
  FormBuilder,
  Validators,
  FormArray
} from '@angular/forms';
import { Store, Select } from '@ngxs/store';
import { ArticleBlog } from 'src/app/shared/models/articles-blog.model';
import {
  UpdateArticle,
  AddArticle,
  SetSelectedArticle,
  SearchArticle,
  DeleteArticle
} from 'src/app/core/store/store.module/article/article.actions';
import { Router } from '@angular/router';
import { ngfModule, ngf } from 'angular-file';
import { ArticleState } from 'src/app/core/store/store.module/article/article.state';
import { Observable, Subscription, of, EMPTY, forkJoin } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { QuillEditorComponent } from 'ngx-quill';
import { QueryArticles } from 'src/app/shared/models/queryArticles.model';
import {
  HttpClient,
  HttpEvent,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';
import { UploadService } from 'src/app/core/http/upload.service';
import { Category } from 'src/app/shared/models/category.model';
import { CategoryService } from 'src/app/core/http/category.service';
import { ArticlesService } from 'src/app/core/http/articles.service';

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
      id: [],
      url: []
    }),
    title: ['', [Validators.required, Validators.minLength(6)]],
    category: [[], [Validators.required, Validators.minLength(6)]],
    content: ['', [Validators.required]],
    tags: this.fb.array([])
  });
  filesIdToDelete: string[] = [];

  constructor(
    private store: Store,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private router: Router,
    public httpClient: HttpClient,
    private uploaderService: UploadService,
    private categoryService: CategoryService,
    private articleService: ArticlesService
  ) {}
  editArticle = false;

  @Select(ArticleState.article)
  selectedArticle: Observable<ArticleBlog>;

  @Select(ArticleState.articles)
  query: Observable<QueryArticles[]>;

  @Output()
  uploadFinished = new EventEmitter<{ photo: { id: string; url: string } }>();

  ngOnInit() {
    this.categoryService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
    this.selectedArticle.subscribe(article => {
      if (article) {
        this.articleForm.patchValue({
          image: article.image,
          title: article.title,
          category: article.category,
          tags: article.tags,
          content: article.content
        });
        article.tags.forEach(t => {
          this.tags.push(this.fb.control(t));
        });
        this.editArticle = true;
        this.id = article._id;
      } else {
        this.editArticle = false;
      }
    });
    this.store.dispatch(new SearchArticle({ limit: 4 }));
  }

  onSubmit() {
    if (!this.editArticle) {
    this.uploadImage()
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
    } else {
      this.uploadImage()
        .pipe(
          // tslint:disable-next-line: deprecation
          switchMap(() => forkJoin(...this.deleteImageUploaded())),
          switchMap(() =>
            this.store.dispatch(
              new UpdateArticle(this.articleForm.value, this.id)
            )
          )
        )
        .subscribe(() => {
          this.filesIdToDelete = [];
          // tslint:disable-next-line: no-unused-expression
          this.showSuccessUpdate();
          this.clearForm();
          this.router.navigate(['articles']);
        });
    }
  }

  /**
   * Delete image of miniature
   */
  deleteImageUploaded(): Observable<any>[] {
    if (this.filesIdToDelete.length > 0) {
      return this.filesIdToDelete.map(idFile =>
        this.articleService.deleteImage(this.id, idFile)
      );
    } else {
      return [of(EMPTY)];
    }
  }

  /**
   * Clear Form when article is Update or Create
   */
  clearForm() {
    this.articleForm.reset();
    this.store.dispatch(new SetSelectedArticle(this.articleForm.value));
  }

  /**
   * Show sucess message when article is create
   */
  showSuccesAdd() {
    this.toastr.success('Article ajouté');
  }

  /**
   * Show succes message when article is update
   */
  showSuccessUpdate() {
    this.toastr.success('Article mis à jour.');
  }

  /**
   * Show error message when article can't be update
   */
  showError() {
    // tslint:disable-next-line: quotemark
    this.toastr.error("Impossible de mettre à jour l'article");
  }

  /**
   * Get all tags
   */
  get tags() {
    return this.articleForm.get('tags') as FormArray;
  }


  /**
   * Add tag on tags Array
   * @param value Tag to add
   */
  addTag(value: string) {
    this.tags.push(this.fb.control(value));
    this.tag.reset();
  }

  /**
   * Remove tag on tags Array
   * @param index tag to remove
   */
  onRemoveTag(index: number) {
    this.tags.removeAt(index);
  }

  /**
   * Cancel Upload Image
   */
  cancel() {
    this.progress = 0;
    if (this.httpEmitter) {
      this.httpEmitter.unsubscribe();
    }
  }

  /**
   * Delete Article
   * @param id idArticle
   */
  deleteArticle(id: string) {
    this.store.dispatch(new DeleteArticle(id));
    this.showSuccessUpdate();
    this.clearForm();
    this.router.navigate(['articles']);
  }

  /**
   * Delete image of miniature
   * @param id idImage
   */
  deleteImage(id: string) {
    this.uploaderService.deleteImage(id);
  }

  /**
   * Remove file of miniature
   */
  onRemoveFile() {
    this.file = [];
    this.filesIdToDelete.push(this.articleForm.get('image').get('id').value);
    this.articleForm.get('image').reset();
  }

  /**
   * Upload file for miniature
   */
  uploadImage(): Observable<any> {
    if (this.file) {
      return this.uploaderService
        .upload(this.sendableFormData)
        .pipe(map(res => this.articleForm.get('image').patchValue(res)));
    } else {
      return of(EMPTY);
    }
  }

  /**
   * Upload file on quill editor
   */
  uploadFiles(): Subscription {
    const req = new HttpRequest<FormData>(
      'POST',
      this.url,
      this.sendableFormData,
      {
        reportProgress: true // , responseType: 'text'
      }
    );
    return (this.httpEmitter = this.httpClient.request(req).subscribe(
      event => {
        this.httpEvent = event;

        if (event instanceof HttpResponse) {
          delete this.httpEmitter;
        }
      },
      error => alert('Error Uploading Files: ' + error.message)
    ));
  }
}
