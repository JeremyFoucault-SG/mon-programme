import { Component, OnInit } from '@angular/core';
import { ProgramsList, ProgramDetail } from '../../shared/models/programs-infos';
import { HomeHeaderMenuComponent } from './header/menu/home-header-menu.component';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ProgrammeState } from 'src/app/core/store/store.module/programme/programme.state';
import {SearchProgramme} from 'src/app/core/store/store.module/programme/programme.action';
import { Programmes } from 'src/app/shared/models/programmes.model';

/**
 * Home component show cards of blog, programs and more
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public user: boolean;
  public selected: ProgramDetail;
  public programsInfos: ProgramDetail[] = ProgramsList.infos;
  public auth: AuthenticationService;


  @Select(ProgrammeState.programmes)
  programmes: Observable<Programmes[]>;

  constructor(private store: Store) { }

  ngOnInit() {
    this.selected = this.programsInfos[0];
    this.store.dispatch(new SearchProgramme({rating: 1, limit: 10}));
  }

  onChange(programDetail: ProgramDetail, index) {
    this.selected = programDetail;
    console.log();
  }

}
