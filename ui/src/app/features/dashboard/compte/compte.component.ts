import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { WishState } from 'src/app/core/store/store.module/wishe/wish.state';
import { Observable } from 'rxjs';
import { Wish } from 'src/app/shared/models/wishes.model';
import { GetAllWishesCoaching, GetAllWishesArticles } from 'src/app/core/store/store.module/wishe/wish.action';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {

  constructor(private store: Store) {
  }

  @Select(WishState.wishCoachings)
  coachings: Observable<Wish[]>;


  @Select(WishState.wishArticles)
  articles: Observable<Wish[]>;

  ngOnInit() {

  }
}
