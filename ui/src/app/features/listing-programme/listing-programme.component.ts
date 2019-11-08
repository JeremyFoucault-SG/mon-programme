import { Component, OnInit, Input } from '@angular/core';
import {
  ProgramDetail,
  ProgramsList
} from 'src/app/shared/models/programs-infos';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { Programme } from 'src/app/shared/models/programmes.model';
import { ProgrammeState } from 'src/app/core/store/store.module/programme/programme.state';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import {
  SearchProgramme,
  GetCoachingByTitle
} from 'src/app/core/store/store.module/programme/programme.action';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AddCart } from 'src/app/core/store/store.module/cart/cart.actions';
import { ToastrService } from 'ngx-toastr';
import { AddWishCoaching, DeleteWishByIdProgramme } from 'src/app/core/store/store.module/wishe/wish.action';
import { map } from 'rxjs/operators';
import { WishState } from 'src/app/core/store/store.module/wishe/wish.state';
import { Wish } from 'src/app/shared/models/wishes.model';

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
  public isFavorite: boolean;


  @Select(ProgrammeState.getProgramme)
  programme: Observable<Programme>;

  @Select(ProgrammeState.getProgrammes)
  programmes: Observable<Programme>;

  @Select(WishState.wishCoachings)
  wishes: Observable<Wish[]>;

  constructor(private store: Store, private route: ActivatedRoute, private toastr: ToastrService, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.title = params.get('title');
      this.store.dispatch(new GetCoachingByTitle(this.title));
    });
    this.selected = this.programsInfos[0];
    this.store.dispatch(new SearchProgramme({ rating: 4, limit: 10 }));
    this.programme.subscribe(item =>  {
      if (item) {
      this.changeFavorite(item._id);
      }
    });
  }

  onChange(programDetail: ProgramDetail, index) {
    this.selected = programDetail;
  }

  addBasket(coaching: Programme) {
    this.store.dispatch(new AddCart({ cartId: coaching._id }));
    this.toastr.success('Programme ajouté au panier avec succés !', 'Succés', {positionClass: 'toast-bottom-right'} );
  }

  addToWishList(coaching: Programme, id: string) {
    this.isFavorite = !this.isFavorite;
    if (this.isFavorite) {
      this.store.dispatch(new AddWishCoaching({ wishId: coaching._id }));
      this.toastr.success('Programme ajouté à la wishlist avec succés !');
    } else {
      this.store.dispatch(new DeleteWishByIdProgramme(id) );
      this.toastr.warning('Programme supprimé de la wishlist avec succés !');
    }

  }

  changeFavorite(id) {
   this.wishes.pipe(
      map(wishes => {
        return wishes.some(w => w.coaching._id === id);
      })
    ).subscribe((hasWish: boolean) => {
      this.isFavorite = hasWish;
    });
  }
}
