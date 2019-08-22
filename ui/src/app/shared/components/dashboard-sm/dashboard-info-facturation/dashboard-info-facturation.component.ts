import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-dashboard-info-facturation',
  templateUrl: './dashboard-info-facturation.component.html',
  styleUrls: ['./dashboard-info-facturation.component.css']
})
export class DashboardInfoFacturationComponent implements OnInit {

  @Input()
  public formFacturation: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
