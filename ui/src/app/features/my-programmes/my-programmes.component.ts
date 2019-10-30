import { Component, OnInit } from '@angular/core';
import { GetAllFollowed } from 'src/app/core/store/store.module/followed-coaching/followed.action';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Followed } from 'src/app/shared/models/followed-coachings.model';
import { FollowedState } from 'src/app/core/store/store.module/followed-coaching/followed.state';

@Component({
  selector: 'app-my-programmes',
  templateUrl: './my-programmes.component.html',
  styleUrls: ['./my-programmes.component.css']
})
export class MyProgrammesComponent implements OnInit {
  @Select(FollowedState.programmes)
  myCoachings: Observable<Followed>;

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(new GetAllFollowed());
  }

}
