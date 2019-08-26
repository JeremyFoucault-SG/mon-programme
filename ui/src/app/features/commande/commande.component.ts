import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {

  paiement = false;
  isHidden = false;

  constructor() { }

  ngOnInit() {
  }


  nextPage() {
    this.paiement = true;
    this.isHidden = !this.isHidden;
  }

}
