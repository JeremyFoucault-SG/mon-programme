import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProgramDetail } from '../../models/programs-infos';

@Component({
  selector: 'app-video-home',
  templateUrl: './video-home.component.html',
  styleUrls: ['./video-home.component.css']
})
export class VideoHomeComponent implements OnInit {

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
