import { Component, OnInit } from '@angular/core';
import { ProgramDetail, ProgramsList } from 'src/app/shared/models/programs-infos';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { ProgrammeState } from 'src/app/core/store/store.module/programme/programme.state';
import { Observable, Subscription } from 'rxjs';
import { Programme } from 'src/app/shared/models/programmes.model';
import { Store, Select } from '@ngxs/store';
import { SearchProgramme, AddNextProgramme } from 'src/app/core/store/store.module/programme/programme.action';
import { QueryCoaching } from 'src/app/shared/models/query.coaching.interface';
import { Router, ActivatedRoute, Params, ParamMap } from '@angular/router';
import { FormControl } from '@angular/forms';
import { WishState } from 'src/app/core/store/store.module/wishe/wish.state';
import { Wish } from 'src/app/shared/models/wishes.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-list-programme',
  templateUrl: './list-programme.component.html',
  styleUrls: ['./list-programme.component.css']
})
export class ListProgrammeComponent implements OnInit {

  public user: boolean;
  public programsInfos: ProgramDetail[] = ProgramsList.infos;
  public auth: AuthenticationService;
  public categories: QueryCoaching;
  public limit = 10;
  public newLimit = 0;

  @Select(ProgrammeState.getProgrammes)
  programmes: Observable<Programme[]>;

  @Select(WishState.wishCoachings)
  wishes: Observable<Wish[]>;

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe((params: Params) => {
        this.store.dispatch(new SearchProgramme({ categories: params.categories, rating: params.rating, limit: this.limit }));
      });
  }

  showMoreCoachings() {
    this.newLimit = this.limit;
    this.limit += 5;
    this.route.queryParams
      .subscribe((params: Params) => {
        this.store.dispatch(new AddNextProgramme({
          categories: params.categories,
          rating: params.rating,
          limit: this.limit,
          skip: this.newLimit
        }));
      });
  }

  navigateTo(value) {
    if (value === 'query1') {
      this.router.navigate(['/nos-programmes'], { queryParams: { rating: 5 }, queryParamsHandling: 'merge' });
    }
    if (value === 'query2') {
      this.router.navigate(['/nos-programmes'], { queryParams: { rating: 3 }, queryParamsHandling: 'merge' });
    }
    if (value === 'query3') {
      this.router.navigate(['/nos-programmes'], { queryParams: { rating: 1 }, queryParamsHandling: 'merge' });
    }
  }

  selectCategory(category) {
    const params = this.route.snapshot.queryParamMap.getAll('categories');
    this.router.navigate([], { relativeTo: this.route, queryParams: { categories: [...params, category] } });
  }

  isFavorite(id): Observable<boolean> {
    return this.wishes.pipe(
      map(wishes => {
        return wishes.some(w => w.coaching._id === id);
      })
    );
  }
}
