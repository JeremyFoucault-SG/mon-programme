import { Component, OnInit, ViewChild} from '@angular/core';
import { FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Store, Select } from '@ngxs/store';
import { ArticleBlog } from 'src/app/shared/models/articles-blog.model';
import {UpdateArticle, AddArticle, SetSelectedArticle, SearchArticle} from 'src/app/core/store/store.module/article/article.actions';
import { Router } from '@angular/router';
import { ngfModule, ngf } from 'angular-file';
import { ArticleState } from 'src/app/core/store/store.module/article/article.state';
import { Observable, Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { QuillEditorComponent } from 'ngx-quill';
import { QueryArticles } from 'src/app/shared/models/queryArticles.model';
import {
  HttpClient, HttpClientModule, HttpRequest, HttpResponse, HttpEvent
} from '@angular/common/http';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit {
  accept = '*';
  file: File;
  progress: number;
  url = 'https://jquery-file-upload.appspot.com/';
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

  @ViewChild('quill', {static: true}) quill: QuillEditorComponent;

  tag = new FormControl(null, Validators.required);
  id: string;

  articleForm = this.fb.group({
    id: [],
    title: [],
    category: [],
    content: [],
    tags: this.fb.array([]),
  });

  constructor(
    private store: Store,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private router: Router,
    public httpClient: HttpClient,
  ) {
  }
  editArticle = false;

  @Select(ArticleState.article)
  selectedArticle: Observable<ArticleBlog>;

  @Select(ArticleState.articles)
  query: Observable<QueryArticles[]>;

  ngOnInit() {
    this.selectedArticle.subscribe(item => {
      if (item) {
        this.articleForm.patchValue({
          id: item._id,
          title: item.title,
          category: item.category,
          tag: item.tag,
          content: item.content,
        });
        this.editArticle = true;
      } else {
        this.editArticle = false;
      }
    });
    this.store.dispatch(new SearchArticle({ limit: 4}));
  }

  onSubmit() {
    if (this.editArticle) {

      this.store
        .dispatch(
          new UpdateArticle(this.articleForm.value, this.articleForm.value.id)
        )
        .subscribe(() => {
          this.showSuccessUpdate();
          this.router.navigate(['articles']);
        });
    } else {
      this.store
        .dispatch(new AddArticle(this.articleForm.value))
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
  onSelectionChanged() {
    console.log(
      this.quill.quillEditor.getSelection(),
      this.articleForm.value
    );
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
    if ( this.httpEmitter ) {
      console.log('cancelled');
      this.httpEmitter.unsubscribe();
    }
  }

  onRemoveFile() {
    this.file = undefined;
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
          console.log('request done', event);
        }
      },
      error => alert('Error Uploading Files: ' + error.message)
    );
  }
}
