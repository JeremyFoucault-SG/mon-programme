import { Component, OnInit } from '@angular/core';
import { GetByIdSetting } from 'src/app/core/store/store.module/settings/setting.action';
import { Settings } from 'src/app/shared/models/settings.model';

@Component({
  selector: 'app-dashboard-goal',
  templateUrl: './dashboard-goal.component.html',
  styleUrls: ['./dashboard-goal.component.css']
})
export class DashboardGoalComponent implements OnInit {
  store: any;
  setting: any;

  constructor() { }
  public goaldata = [10];
  public plastiqueType = 'doughnut';
  public plastiqueColor =
    [
      {
        backgroundColor: ['rgb(65,105,225,0.6)', 'rgb(102, 102, 102, 0.4)'],
        borderColor: ['rgb(65,105,225,1)', 'transparent'],
      },
    ];

  ngOnInit() {
    this.store.dispatch(new GetByIdSetting());
    this.setting.subscribe((item: Settings) => {
      console.log(item);
      }
    );
  }

}
