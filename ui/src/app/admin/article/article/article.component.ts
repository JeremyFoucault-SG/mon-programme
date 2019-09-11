import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ArticleBlog } from '../../../shared/models/articles-blog.model';
import { ArticleState } from '../../../core/store/store.module/article/article.state';
import {
  DeleteArticle,
  GetAllArticles,
  SetSelectedArticle } from '../../../core/store/store.module/article/article.actions';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Select(ArticleState.articles )
  articles: Observable<ArticleBlog[]>;

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(new GetAllArticles());
  }
  editArticle(payload: ArticleBlog) {
    this.store.dispatch(new SetSelectedArticle(payload));
  }

}
