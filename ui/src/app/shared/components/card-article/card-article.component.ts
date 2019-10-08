import { Component, OnInit, Input } from '@angular/core';
import { ArticleBlog } from '../../../shared/models/articles-blog.model';
import { Store, Select } from '@ngxs/store';
import { FirstCharacterePipe } from '../../pipes/firstCharactere.pipe';
import { VirtualTimeScheduler, Observable } from 'rxjs';
import { AddWishCoaching, AddWishArticle, DeleteWishArticle } from 'src/app/core/store/store.module/wishe/wish.action';
import { ToastrService } from 'ngx-toastr';
import { WishState } from 'src/app/core/store/store.module/wishe/wish.state';
import { Wish } from '../../models/wishes.model';

@Component({
  selector: 'app-card-article',
  templateUrl: './card-article.component.html',
  styleUrls: ['./card-article.component.css']
})
export class CardArticleComponent implements OnInit {

  @Select(WishState.wishArticles)
  articles: Observable<Wish[]>;
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

  constructor(private store: Store,
              private toastr: ToastrService) { }

  isFavorite = false;

  ngOnInit() {
  }

  addWishArticle(article: ArticleBlog) {
    this.isFavorite = !this.isFavorite;
    if (this.isFavorite) {
      this.store.dispatch(new AddWishArticle({ wishId: article._id }));
      this.toastr.success('Article ajouté aux favoris avec succés !');
    } else {
      this.toastr.warning('Article supprimé des favoris avec succés !');
    }
  }
}
