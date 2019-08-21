import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProgramDetail } from '../../models/programs-infos';

@Component({
  selector: 'app-nos-programme-home',
  templateUrl: './nos-programme-home.component.html',
  styleUrls: ['./nos-programme-home.component.css']
})
export class NosProgrammeHomeComponent implements OnInit {

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
