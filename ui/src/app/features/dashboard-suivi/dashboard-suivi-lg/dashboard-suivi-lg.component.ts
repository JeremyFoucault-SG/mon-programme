import { Component, OnInit } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-dashboard-suivi-lg',
  templateUrl: './dashboard-suivi-lg.component.html',
  styleUrls: ['./dashboard-suivi-lg.component.css']
})
export class DashboardSuiviLgComponent implements OnInit {

  inscription = false;
  isHidden = false;
  public user: User;

  constructor() { }


  ngOnInit() {

  }

  nextPage() {
    this.inscription = true;
    this.isHidden = !this.isHidden;
  }
}
