import { Component, OnInit } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

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
