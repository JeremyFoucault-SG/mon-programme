import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  return() {
    if (this.index > 1) {
      this.index--;
    } else {
      this.router.navigateByUrl(`login`);
    }
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
