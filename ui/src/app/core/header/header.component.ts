import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Data, Router, NavigationStart, NavigationEnd, NavigationError, Event } from '@angular/router';
import { filter, map, mergeMap, tap } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private toastr: ToastrService) { }

  ngOnInit() {
    this.isLogin()
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
          this.open()
        }),
        mergeMap(route => route.data),
      ).subscribe((data) => {
        this.title = data.title;
        this.isTransparent = data.isTransparent;
      })
    );
  }

  /**
   * Open/Close navigation menu
   */
  open() {
    this.isOpen = !this.isOpen;
  }

  /**
   * Call unsubscribe on each subscription
   */
  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }


  isLogin() {
    if (sessionStorage.getItem('token')) {
      this.user = true;
      return true;
    }
  }

  logout() {
    this.router.navigateByUrl('/login');
    this.showSuccessLogout();
    localStorage.removeItem('token');
    this.user = false;
  }

  showSuccessLogout() {
    this.toastr.success('Vous êtes déconnecté(e)');
  }


}
