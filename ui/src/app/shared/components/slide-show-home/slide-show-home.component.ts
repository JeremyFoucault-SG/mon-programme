import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ProgramDetail, ProgramsList } from '../../models/programs-infos';
import { Location } from '@angular/common';

@Component({
  selector: 'app-slide-show-home',
  templateUrl: './slide-show-home.component.html',
  styleUrls: ['./slide-show-home.component.css']
})
export class SlideShowHomeComponent implements OnInit {

  constructor(private location: Location, ) { }

  @Input()
  public selected: ProgramDetail;

  @Input()
  public programInfos: ProgramDetail[];

  @Input()
  public infos: ProgramDetail[];

  @Output()
  selectChange: EventEmitter<any> = new EventEmitter();


  ngOnInit() {
  }

  onChange(programDetail: ProgramDetail, index) {
    this.selected = programDetail;
    this.selectChange.emit(this.selected[index + 1]);
  }

  backClick() {
    this.location.back();
  }


}
