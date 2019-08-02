import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ProgramDetail } from '../../models/programs-infos';

@Component({
  selector: 'app-slide-show-home',
  templateUrl: './slide-show-home.component.html',
  styleUrls: ['./slide-show-home.component.css']
})
export class SlideShowHomeComponent implements OnInit {

  constructor() { }

  @Input()
  public selected: ProgramDetail;

  @Input()
  public programInfos: ProgramDetail[];

  @Output()
  public selectChange = new EventEmitter();

  ngOnInit() {
  }

  onChange(programDetail: ProgramDetail) {
    this.selected = programDetail;
    console.log(this.selected);
  }
}
