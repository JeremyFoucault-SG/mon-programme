import { Component, OnInit, Input, HostListener, ElementRef, Output, EventEmitter } from '@angular/core';
import { Programmes } from '../../models/programmes.model';
import { Params, Router } from '@angular/router';
import { CoachingsService } from 'src/app/core/http/coachings.service';
import { tap } from 'rxjs/operators';
import { UsersService } from 'src/app/core/http/users.service';
import { LoginService } from 'src/app/core/services/login.service';
import { WishesService } from 'src/app/core/http/wishes.service';
import { Wish } from '../../models/wishes.model';
import { ProgrammesDTO } from '../../models/coaching.dto';
import { Store } from '@ngxs/store';
import { AddWishCoaching } from 'src/app/core/store/store.module/wishe/wish.action';

/**
 * Card thumb is used for both thumbs of programs and article
 */
@Component({
  selector: 'app-card-thumb-program',
  templateUrl: './card-thumb-program.component.html',
  styleUrls: ['./card-thumb-program.component.css']
})
export class CardThumbProgramComponent implements OnInit {


  isOpen = false;
  /**
   * Set image in background of card
   */
  @Input()
  imageUrl: string;

  @Input()
  level: string;

  /**
   * If true set a darken overlay above background image
   */
  @Input()
  hasBgOverlay: boolean;

  /**
   * If true append a menu (more like) in top-right of card
   */
  @Input()
  hasMenu: boolean;

  /**
   * Set a tag in top-right of card
   */
  @Input()
  tag: string;

  /**
   * Set number of stars in top-right of card
   */
  @Input()
  topStars: number;
  /**
   * Set title of card in left-botton of card
   */
  @Input()
  title: string;

  /**
   * Set text content of card below title
   */
  @Input()
  content: string;

  /**
   * If true set title, content, inline stars and add to whishilt inside an overlay trigger on hover
   */
  @Input()
  isContentOverlay = false;

  /**
   * Set number on inline start in right-bottom of card
   */
  @Input()
  inlineStars: number;

  /**
   * If true add button "add to wish list" in right-bottom of card
   */
  @Input()
  hasWish: boolean;

  // @Input()
  // coaching: Programmes[];

  @Input()
  public coaching: Programmes;

  @Input()
  items: any[];


  isFavorite = false;

  /**
   * Open/hide content overlay
   */
  private showContentOverlay = false;

  constructor(private elmt: ElementRef,
              private router: Router,
              public coachingsService: CoachingsService,
              public authService: LoginService,
              private wishService: WishesService,
              private store: Store) { }

  ngOnInit() {
  }

  show() {
    this.router.navigate(['/nos-programmes', this.title]);
  }

  /**
   * Show content overlay on mousenter event
   */
  onShowContentOverlay() {
    this.showContentOverlay = true;
  }

  /**
   * Hide overlay on mouseleave event
   */
  onHideContentOverlay() {
    this.showContentOverlay = false;
  }

  open($event) {
    $event.stopPropagation();
    this.isOpen = !this.isOpen;
  }

  close() {
    this.isOpen = false;
  }


  addRating() {
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event) {
    if (!this.elmt.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }

  addToWishList(coaching: Programmes) {
    console.log(coaching);
    this.store.dispatch(new AddWishCoaching({ wishId: coaching._id }));
    this.isFavorite = true;
  }

}

