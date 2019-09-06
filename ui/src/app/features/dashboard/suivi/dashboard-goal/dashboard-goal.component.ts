import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-goal',
  templateUrl: './dashboard-goal.component.html',
  styleUrls: ['./dashboard-goal.component.css']
})
export class DashboardGoalComponent implements OnInit {

  constructor() { }
  public goaldata = [10]
  public plastiqueType = 'doughnut';
  public plastiqueColor =
    [
      {
        backgroundColor: ['rgb(65,105,225,0.6)', 'rgb(102, 102, 102, 0.4)'],
        borderColor: ['rgb(65,105,225,1)', 'transparent'],
      },
    ];

  ngOnInit() {
  }

}
