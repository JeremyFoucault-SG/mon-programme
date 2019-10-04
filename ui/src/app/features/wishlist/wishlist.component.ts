import { Component, OnInit } from '@angular/core';
import { Programmes } from 'src/app/shared/models/programmes.model';
import { WishesService } from 'src/app/core/http/wishes.service';
import { Wish } from 'src/app/shared/models/wishes.model';
import { ProgrammesDTO } from 'src/app/shared/models/coaching.dto';
import { Store, Select } from '@ngxs/store';
import { GetAllWishesCoaching, GetAllWishesArticles, DeleteWishArticle, DeleteWishCoaching } from 'src/app/core/store/store.module/wishe/wish.action';
import { WishState } from 'src/app/core/store/store.module/wishe/wish.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  constructor( private store: Store) { }

  @Select(WishState.wishCoachings)
  coachings: Observable<Wish[]>;


  @Select(WishState.wishArticles)
  articles: Observable<Wish[]>;

  ngOnInit() {
    this.store.dispatch(new GetAllWishesCoaching());
    this.store.dispatch(new GetAllWishesArticles())
  }

  deleteWishCoaching(id: string){
    this.store.dispatch(new DeleteWishCoaching(id));
  }

  deleteWishArticle(id: string){
    this.store.dispatch(new DeleteWishArticle(id));
  }

  

}
