import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Wish } from 'src/app/shared/models/wishes.model';
import { WishState } from 'src/app/core/store/store.module/wishe/wish.state';
import { GetAllWishesArticles } from 'src/app/core/store/store.module/wishe/wish.action';

@Component({
  selector: 'app-wishlist-article',
  templateUrl: './wishlist-article.component.html',
  styleUrls: ['./wishlist-article.component.css']
})
export class WishlistArticleComponent implements OnInit {

  constructor(private store: Store) { }

  @Select(WishState.wishArticles)
  wishes: Observable<Wish[]>;

  ngOnInit() {
    this.store.dispatch(new GetAllWishesArticles());
  }

}
