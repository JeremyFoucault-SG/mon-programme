import { Component, OnInit } from '@angular/core';
import { ProgramsList, ProgramDetail} from '../../shared/models/programs-infos';
import { NosProgrammeHomeComponent } from '../../shared/components/nos-programme-home/nos-programme-home.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public selected: ProgramDetail;
  public programsInfos: ProgramDetail[] = ProgramsList.infos;

  constructor() { }

  ngOnInit() {
    this.selected = this.programsInfos[3];
  }

  onChange(programsInfos: ProgramDetail[]) {
    this.selected = this.programsInfos[1];
    console.log(this.selected);
  }
}
