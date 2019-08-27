import { Component, OnInit, Input } from '@angular/core';
import { ProgramDetail } from '../../shared/models/programs-infos';

@Component({
  selector: 'app-pratique-sportive-mobile',
  templateUrl: './pratique-sportive-mobile.html',
  styleUrls: ['./pratique-sportive-mobile.css']
})
export class PratiqueSportiveMobileComponent implements OnInit {

  constructor() { }


  @Input()
  public selected: ProgramDetail;


  ngOnInit() {
  }

}
