import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-group-title',
  templateUrl: './group-title.component.html',
  styleUrls: ['./group-title.component.css']
})
export class GroupTitleComponent implements OnInit {
  /**
   * If true set title on the right for lg and xl display
   */
  @Input()
  titleOnRight = false;

  constructor() { }

  ngOnInit() {
  }

}
