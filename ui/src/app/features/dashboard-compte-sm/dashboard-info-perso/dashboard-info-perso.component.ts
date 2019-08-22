import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-dashboard-info-perso',
  templateUrl: './dashboard-info-perso.component.html',
  styleUrls: ['./dashboard-info-perso.component.css']
})
export class DashboardInfoPersoComponent implements OnInit {

  /**
   * liason formulaire personels payment
   */
  @Input()
  public formInfo: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
