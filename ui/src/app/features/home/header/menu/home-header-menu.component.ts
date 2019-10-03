import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProgramDetail } from '../../../../shared/models/programs-infos';

@Component({
  selector: 'app-home-header-menu',
  templateUrl: './home-header-menu.component.html',
  styleUrls: ['./home-header-menu.component.css']
})
export class HomeHeaderMenuComponent implements OnInit {

  constructor() { }

  @Input()
  public selected: ProgramDetail;

  @Input()
  public programInfos: ProgramDetail[];

  @Output()
  public selectChange = new EventEmitter();

  ngOnInit() {
  }

}
