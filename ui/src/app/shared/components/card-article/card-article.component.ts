import { Component, OnInit, Input } from '@angular/core';
import { ArticleBlog } from '../../../shared/models/articles-blog.model';
import { Store, Select} from '@ngxs/store';
import { FirstCharacterePipe } from '../../pipes/firstCharactere.pipe';
import { VirtualTimeScheduler } from 'rxjs';
import { AddWishCoaching, AddWishArticle } from 'src/app/core/store/store.module/wishe/wish.action';
@Component({
  selector: 'app-card-article',
  templateUrl: './card-article.component.html',
  styleUrls: ['./card-article.component.css']
})
export class CardArticleComponent implements OnInit {

  /**
   * Set photo, titre, desc in article-blog
   */
  @Input()
  public article: ArticleBlog;
  /**
   * Look is the articles is even or odd
   */
  @Input()
  public isReverse: boolean;

  constructor(private store: Store) { }

  isFavorite = false;

  ngOnInit() {
  }

  addWishArticle(article: ArticleBlog) {
    console.log(article)
    this.store.dispatch( new AddWishArticle({wishId: article._id}));
    this.isFavorite = !this.isFavorite;
  }
}
