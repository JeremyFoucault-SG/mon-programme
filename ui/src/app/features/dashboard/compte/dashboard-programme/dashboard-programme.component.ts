import { Component, OnInit, Input } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { WishState } from 'src/app/core/store/store.module/wishe/wish.state';
import { Observable } from 'rxjs';
import { Wish } from 'src/app/shared/models/wishes.model';
import { GetAllWishesCoaching } from 'src/app/core/store/store.module/wishe/wish.action';

@Component({
  selector: 'app-dashboard-programme',
  templateUrl: './dashboard-programme.component.html',
  styleUrls: ['./dashboard-programme.component.css']
})
export class DashboardProgrammeComponent implements OnInit {

  constructor(private store: Store) {
  }

  @Select(WishState.wishCoachings)
  coachings: Observable<Wish[]>;

  ngOnInit() {
    this.store.dispatch(new GetAllWishesCoaching({limit: 3}));
  }
}
