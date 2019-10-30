import { Component, OnInit } from '@angular/core';
import { ArticleBlog } from '../../shared/models/articles-blog.model';
import { Store, Select} from '@ngxs/store';
import { Observable } from 'rxjs/Observable';
import { GetAllArticles, SearchArticle, SearchNextArticle, ResetArticle } from './../../core/store/store.module/article/article.actions';
import { ArticleState } from 'src/app/core/store/store.module/article/article.state';
import { ActivatedRoute, Params, Router } from '@angular/router';


/**
 * BLog component use to display blog articles
 */
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  public listArticles = [] as any;
  public path: any;
  public limit = 3;
  public skip = 0;

  @Select(ArticleState.articles )
  articles: Observable<ArticleBlog>;

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router) {
   }



  ngOnInit() {
    this.store.dispatch(new ResetArticle());
    this.route.queryParams.subscribe((params: Params) => {
      this.path = this.router.url.substring(1);
      this.store.dispatch(new SearchNextArticle({categories: `${this.path}`, limit: 3}));
    });

  }
  showMoreArticles() {
    this.skip = this.limit;
    this.limit += 3;
    this.store.dispatch(new SearchNextArticle({categories: `${this.path}`, skip: this.skip, limit: this.limit}));
  }
}
