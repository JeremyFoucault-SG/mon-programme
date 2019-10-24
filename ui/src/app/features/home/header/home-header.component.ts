import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ProgramDetail, ProgramsList } from '../../../shared/models/programs-infos';
import { Location } from '@angular/common';

/**
 * Home header component
 */
@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent implements OnInit {

  constructor(private location: Location, ) { }

  public programsInfos: ProgramDetail[] = ProgramsList.infos;

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

  // TODO: fix param
  onChange(programDetail: ProgramDetail/* , index */) {
    this.selected = programDetail;
    // this.selectChange.emit(this.selected[index + 1]);
  }

  backClick() {
    this.location.back();
  }


}
