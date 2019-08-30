import { Component, OnInit } from '@angular/core';
import { ArticleBlog } from '../../models/articles-blog.model';
import { Store, Select} from '@ngxs/store';
import { Observable } from 'rxjs/Observable';
import { GetAllArticles } from './../../../core/store/store.module/article/article.actions';
import { ArticleState } from 'src/app/core/store/store.module/article/article.state';
@Component({
  selector: 'app-list-blog',
  templateUrl: './list-blog.component.html',
  styleUrls: ['./list-blog.component.css']
})
export class ListBlogComponent implements OnInit {

  @Select(ArticleState.articles )
  articles: Observable<ArticleBlog[]>;
  
  constructor( private store: Store) {
   }

  // public articlesBlog = [
  //   new ArticleBlog('https://zupimages.net/up/19/31/4pis.jpeg', 'Les fruit secs',
  // // tslint:disable-next-line: max-line-length
  // 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Dolores, odit quasi possimus molestias enim reprehenderit ea, error sint laborum maxime officia quos harum voluptatum. Quos quidem culpa temporibus placeat eligendi!'),
  //   new ArticleBlog('https://zupimages.net/up/19/31/4pis.jpeg', 'Les fruit secs',
  // // tslint:disable-next-line: max-line-length
  // 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Dolores, odit quasi possimus molestias enim reprehenderit ea, error sint laborum maxime officia quos harum voluptatum. Quos quidem culpa temporibus placeat eligendi!'),
  // new ArticleBlog('https://zupimages.net/up/19/31/4pis.jpeg', 'Les fruit secs',
  // // tslint:disable-next-line: max-line-length
  // 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Dolores, odit quasi possimus molestias enim reprehenderit ea, error sint laborum maxime officia quos harum voluptatum. Quos quidem culpa temporibus placeat eligendi!'),
  //   new ArticleBlog('https://zupimages.net/up/19/31/4pis.jpeg', 'Les fruit secs',
  // // tslint:disable-next-line: max-line-length
  // 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Dolores, odit quasi possimus molestias enim reprehenderit ea, error sint laborum maxime officia quos harum voluptatum. Quos quidem culpa temporibus placeat eligendi!'),
  // new ArticleBlog('https://zupimages.net/up/19/31/4pis.jpeg', 'Les fruit secs',
  // // tslint:disable-next-line: max-line-length
  // 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Dolores, odit quasi possimus molestias enim reprehenderit ea, error sint laborum maxime officia quos harum voluptatum. Quos quidem culpa temporibus placeat eligendi!'),
  //   new ArticleBlog('https://zupimages.net/up/19/31/4pis.jpeg', 'Les fruit secs',
  // // tslint:disable-next-line: max-line-length
  // 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Dolores, odit quasi possimus molestias enim reprehenderit ea, error sint laborum maxime officia quos harum voluptatum. Quos quidem culpa temporibus placeat eligendi!'),
  // new ArticleBlog('https://zupimages.net/up/19/31/4pis.jpeg', 'Les fruit secs',
  // // tslint:disable-next-line: max-line-length
  // 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Dolores, odit quasi possimus molestias enim reprehenderit ea, error sint laborum maxime officia quos harum voluptatum. Quos quidem culpa temporibus placeat eligendi!'),
  //   new ArticleBlog('https://zupimages.net/up/19/31/4pis.jpeg', 'Les fruit secs',
  // // tslint:disable-next-line: max-line-length
  // 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Dolores, odit quasi possimus molestias enim reprehenderit ea, error sint laborum maxime officia quos harum voluptatum. Quos quidem culpa temporibus placeat eligendi!'),
  // ];

  ngOnInit() {
    this.store.dispatch(new GetAllArticles());
  }

}
