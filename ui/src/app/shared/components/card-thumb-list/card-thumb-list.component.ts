import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-thumb-list',
  templateUrl: './card-thumb-list.component.html',
  styleUrls: ['./card-thumb-list.component.css']
})
export class CardThumbListComponent implements OnInit {

  @Input()
  items: any;

  @Input()
  titleOnRight = false;

  constructor() { }

  ngOnInit() {
  }

}
