import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { ProgrammeState } from 'src/app/core/store/store.module/programme/programme.state';
import { Observable } from 'rxjs';
import { Programme } from 'src/app/shared/models/programmes.model';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { GetCoachingByTitle } from 'src/app/core/store/store.module/programme/programme.action';

@Component({
  selector: 'app-programme-content',
  templateUrl: './programme-content.component.html',
  styleUrls: ['./programme-content.component.css']
})
export class ProgrammeContentComponent implements OnInit {
  public title: string;

  @Select(ProgrammeState.getProgramme)
  programme: Observable<Programme>;

  constructor(private store: Store,  private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.title = params.get('title');
      this.store.dispatch(new GetCoachingByTitle(this.title));
    });
  }

}
