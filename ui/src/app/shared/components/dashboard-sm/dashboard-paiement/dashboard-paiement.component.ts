import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dashboard-paiement',
  templateUrl: './dashboard-paiement.component.html',
  styleUrls: ['./dashboard-paiement.component.css']
})
export class DashboardPaiementComponent implements OnInit {

  @Input()
  public formPaiement: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
