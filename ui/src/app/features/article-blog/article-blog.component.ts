import { Component, OnInit, Input } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ArticleState } from 'src/app/core/store/store.module/article/article.state';
import { GetByIdArticle } from '../../core/store/store.module/article/article.actions';

@Component({
  selector: 'app-article-blog',
  templateUrl: './article-blog.component.html',
  styleUrls: ['./article-blog.component.css']
})
export class ArticleBlogComponent implements OnInit {


  @Input()
  tag: string;


  @Select(ArticleState.articles)
  articles: Observable<any>;


  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(new GetByIdArticle('5d70dfdf42a76f14bf21d70d'));
  }

}
