import { Component, OnInit, Input } from '@angular/core';
import { ProgramDetail, ProgramsList } from 'src/app/shared/models/programs-infos';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Programmes } from 'src/app/shared/models/programmes.model';
import { ProgrammeState } from 'src/app/core/store/store.module/programme/programme.state';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { SearchProgramme, GetCoachingByTitle } from 'src/app/core/store/store.module/programme/programme.action';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-listing-programme',
  templateUrl: './listing-programme.component.html',
  styleUrls: ['./listing-programme.component.css']
})
export class ListingProgrammeComponent implements OnInit {


  @Input()
  title: string;

  @Input()
  content: string;

  public selected: ProgramDetail;
  public programsInfos: ProgramDetail[] = ProgramsList.infos;
  public programs = [];
  public user: boolean;
  public auth: AuthenticationService;



  @Select(ProgrammeState.Getprogrammes)
  programme: Observable<Programmes>;

  @Select(ProgrammeState.programme)
  programmes: Observable<Programmes>;


  constructor(private store: Store, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.title = params.get('title');
      this.store.dispatch(new GetCoachingByTitle(this.title));
    });
    this.selected = this.programsInfos[0];
    this.store.dispatch(new SearchProgramme({ rating: 4, limit: 10 }));
  }



  onChange(programDetail: ProgramDetail, index) {
    this.selected = programDetail;
    console.log();
  }

}
