import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  public index = 1;

  miseAjourIndex(event) {
    this.index = event.value;
  }
  constructor() { }

  ngOnInit() {
  }

}
