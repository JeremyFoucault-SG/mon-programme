import { Component, OnInit, Input } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ArticleState } from 'src/app/core/store/store.module/article/article.state';
import { GetByIdArticle, DeleteArticle } from '../../core/store/store.module/article/article.actions';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ArticleBlog } from 'src/app/shared/models/articles-blog.model';

@Component({
  selector: 'app-article-blog',
  templateUrl: './article-blog.component.html',
  styleUrls: ['./article-blog.component.css']
})
export class ArticleBlogComponent implements OnInit {

  public id: string;
  @Input()
  tag: string;


  @Select(ArticleState.article)
  article: Observable<ArticleBlog>;

  deleteArticle() {
    this.store.dispatch(new DeleteArticle(this.id));
  }

  constructor(private store: Store, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
      this.store.dispatch(new GetByIdArticle(this.id));
  }); }

}
