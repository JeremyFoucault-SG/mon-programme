import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProgramDetail } from '../../../../shared/models/programs-infos';

@Component({
  selector: 'app-home-header-video',
  templateUrl: './home-header-video.component.html',
  styleUrls: ['./home-header-video.component.css']
})
export class HomeHeaderVideoComponent implements OnInit {

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
