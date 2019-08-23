import { Component, OnInit } from '@angular/core';
import { ProgramsList, ProgramDetail} from '../../shared/models/programs-infos';
import { HomeHeaderMenuComponent } from './header/menu/home-header-menu.component';

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
    this.selected = this.programsInfos[0];
  }

  onChange(programDetail: ProgramDetail, index) {
    this.selected = programDetail;
    console.log();
  }

}
