import { Component, OnInit, ViewChild, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Store, Select } from '@ngxs/store';
import { ArticleBlog } from 'src/app/shared/models/articles-blog.model';
import {
  UpdateArticle,
  AddArticle,
  SetSelectedArticle,
  SearchArticle
} from 'src/app/core/store/store.module/article/article.actions';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ngfModule, ngf } from 'angular-file';
import { ArticleState } from 'src/app/core/store/store.module/article/article.state';
import { Observable, Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { QuillEditorComponent } from 'ngx-quill';
import { ArticlesService } from 'src/app/core/http/articles.service';
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
}
