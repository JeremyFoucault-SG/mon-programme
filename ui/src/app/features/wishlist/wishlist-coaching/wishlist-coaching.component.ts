import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Wish } from 'src/app/shared/models/wishes.model';
import { WishState } from 'src/app/core/store/store.module/wishe/wish.state';
import { Observable } from 'rxjs';
import { GetAllWishesCoaching } from 'src/app/core/store/store.module/wishe/wish.action';

@Component({
  selector: 'app-wishlist-coaching',
  templateUrl: './wishlist-coaching.component.html',
  styleUrls: ['./wishlist-coaching.component.css']
})
export class WishlistCoachingComponent implements OnInit {

  constructor(private store: Store) { }

  @Select(WishState.wishCoachings)
  wishes: Observable<Wish[]>;

  ngOnInit() {
    this.store.dispatch(new GetAllWishesCoaching());
  }

}
