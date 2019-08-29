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
    this.store.dispatch(new GetByIdArticle('5d67b0e858f61a1e16294c2a'));
  }

}
