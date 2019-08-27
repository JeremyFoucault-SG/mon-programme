import { Component, OnInit, Input } from '@angular/core';
import { ProgramDetail } from '../../shared/models/programs-infos';

@Component({
  selector: 'app-nos-programme-mobile',
  templateUrl: './nos-programme-mobile.component.html',
  styleUrls: ['./nos-programme-mobile.component.css']
})
export class NosProgrammeMobileComponent implements OnInit {

  constructor() { }


  @Input()
  public selected: ProgramDetail;


  ngOnInit() {
  }

}
