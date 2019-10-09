import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { WishState } from 'src/app/core/store/store.module/wishe/wish.state';
import { Observable } from 'rxjs';
import { Wish } from 'src/app/shared/models/wishes.model';
import { GetAllWishesArticles } from 'src/app/core/store/store.module/wishe/wish.action';

@Component({
  selector: 'app-dashboard-article',
  templateUrl: './dashboard-article.component.html',
  styleUrls: ['./dashboard-article.component.css']
})
export class DashboardArticleComponent implements OnInit {

  constructor(private store: Store) {
  }

  @Select(WishState.wishArticles)
  articles: Observable<Wish[]>;

  ngOnInit() {
    this.store.dispatch(new GetAllWishesArticles({limit: 3}));
  }
}
