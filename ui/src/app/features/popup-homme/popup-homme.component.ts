import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup-homme',
  templateUrl: './popup-homme.component.html',
  styleUrls: ['./popup-homme.component.css']
})
export class PopupHommeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.body.classList.add('bg-img');
  }

}
