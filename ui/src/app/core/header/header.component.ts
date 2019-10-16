import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Data, Router, NavigationStart, NavigationEnd, NavigationError, Event } from '@angular/router';
import { filter, map, mergeMap, tap } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../authentication/authentication.service';
import { CartsService } from '../http/carts.service';
import { Login } from 'src/app/shared/models/login.model';
import { User } from 'src/app/shared/models/user.model';
import { Select, Store } from '@ngxs/store';
import { CartState } from '../store/store.module/cart/cart.state';
import { Cart } from 'src/app/shared/models/cart.model';
import { GetAllCarts } from '../store/store.module/cart/cart.actions';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { ConnexionModalComponent } from 'src/app/shared/components/connexion-modal/connexion-modal.component';

/**
 * Header component, hold navigation, title, user
 * TODO: search form
 * TODO: signup/signin
 */

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  public user: boolean;
  /**
   * True is user is authenticated, display avatar and name on navbar
   * and add more links on navigation menu
   */

  /**
   * Title of the current view (only displayed on md)
   */
  title = 'Title Example';

  /**
   * True for transparent background else set background to black color
   */
  isTransparent = true;

  /**
   * Open or close navigation menu
   */
  isOpen = false;

  /**
   * Store all subscription for unsubscribe on destroy cycle event
   */
  subscriptions: Subscription[] = [];

  // users: Login;
  // name = this.users.username;


  public coachings = [];
  public newOrder = 0;

  @Select(CartState.count)
  carts: Observable<number>;


  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private auth: AuthenticationService,
    private cartsService: CartsService,
    private store: Store,
    private modalService: ModalService) { }

  ngOnInit() {

    this.auth.isLogin().subscribe(valeur => this.user = valeur);
    // if (this.auth.isLogin()) {
    //   this.user = true;
    // } else {
    //   this.user = false;
    // }
    // Little hack to get route data when component is outside of router-outlet
    this.subscriptions.push(
      this.router.events.pipe(
        filter(e => e instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map(route => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
          this.open();
        }),
        mergeMap(route => route.data),
      ).subscribe((data) => {
        this.title = data.title;
        this.isTransparent = data.isTransparent;
      }),
    );
    if (this.auth.isLogin()) {
      // this.store.dispatch(new GetAllCarts()).subscribe(
      //   (coachings) => {
      //     this.coachings = coachings;
      //     this.newOrder = this.coachings.length;
      //   });
    }
  }

  /**
   * Open/Close navigation menu
   */
  open() {
    this.isOpen = !this.isOpen;
  }

  openInscription() {
    this.modalService.init(ConnexionModalComponent, {}, {});
  }

    /**
     * Call unsubscribe on each subscription
     */
    ngOnDestroy(): void {
      this.subscriptions.forEach(s => s.unsubscribe());
    }

    logout() {
      this.auth.isLogout().subscribe(valeur => this.user = valeur);
      this.open();
    }


  }

