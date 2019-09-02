import { Component, OnInit, Input } from '@angular/core';

/**
 * Group title component, can display title, subtitle and action.
 * Use with card-list-thumb in home page, blog articles etc
 */
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
