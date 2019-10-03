import { Component, OnInit } from '@angular/core';
import { Programmes } from 'src/app/shared/models/programmes.model';
import { WishesService } from 'src/app/core/http/wishes.service';
import { Wish } from 'src/app/shared/models/wishes.model';
import { ProgrammesDTO } from 'src/app/shared/models/coaching.dto';
import { Store, Select } from '@ngxs/store';
import { GetAllWishesCoaching, GetAllWishesArticles } from 'src/app/core/store/store.module/wishe/wish.action';
import { WishState } from 'src/app/core/store/store.module/wishe/wish.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  constructor(private wishService: WishesService, private store: Store) { }

  @Select(WishState.wish)
  wish: Observable<Wish[]>;

  ngOnInit() {
  }

  showCoachings() {
    console.log(this.wish);
    this.store.dispatch(new GetAllWishesCoaching());
  }

  showArticles() {
  this.store.dispatch(new GetAllWishesArticles());
  }
}
