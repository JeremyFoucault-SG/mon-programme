import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ArticleBlog } from '../../../shared/models/articles-blog.model';
import { ArticleState } from '../../../core/store/store.module/article/article.state';
import {
  DeleteArticle,
  SetSelectedArticle,
  SearchArticle
} from '../../../core/store/store.module/article/article.actions';
import { ToastrService } from 'ngx-toastr';
import { QueryArticles } from 'src/app/shared/models/queryArticles.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Select(ArticleState.articles)
  articles: Observable<ArticleBlog[]>;

  @Select(ArticleState.articles)
  query: Observable<QueryArticles[]>;

  constructor(
    private store: Store,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    this.store.dispatch(new SearchArticle({ limit: 4 }));
  }
  editArticle(payload: ArticleBlog) {
    this.router.navigate(['create-article']);
    this.store.dispatch(new SetSelectedArticle(payload));
  }
  deleteArticle(id: string) {
    this.store.dispatch(new DeleteArticle(id));
    this.showSuccessDelete();
  }

  showSuccessDelete() {
    this.toastr.success('Article Supprimé avec succés');
  }
  createArticle() {
    this.router.navigate(['create-article']);
  }
}
