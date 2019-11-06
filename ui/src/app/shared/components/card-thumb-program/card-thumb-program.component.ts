import { Component, OnInit, Input, HostListener, ElementRef, Output, EventEmitter } from '@angular/core';
import { Programme } from '../../models/programmes.model';
import { Router } from '@angular/router';
import { CoachingsService } from 'src/app/core/http/coachings.service';
import { LoginService } from 'src/app/core/services/login.service';
import { WishesService } from 'src/app/core/http/wishes.service';
import { Store } from '@ngxs/store';
import { AddWishCoaching, DeleteWishByIdProgramme } from 'src/app/core/store/store.module/wishe/wish.action';
import { ToastrService } from 'ngx-toastr';

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

  @Input()
  urlTitle: string[];

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
  public coaching: Programme;

  @Input()
  items: any[];


  @Input()
  public isFavorite: boolean;

  /**
   * Open/hide content overlay
   */
  showContentOverlay = false;

  constructor(private elmt: ElementRef,
              private router: Router,
              public coachingsService: CoachingsService,
              public authService: LoginService,
              private wishService: WishesService,
              private store: Store,
              private toastr: ToastrService) { }

  ngOnInit() {
  }

  show() {
    this.router.navigate(['/nos-programmes', this.urlTitle]);
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

  addToWishList(coaching: Programme, id: string) {
    this.isFavorite = !this.isFavorite;
    if (this.isFavorite) {
      this.store.dispatch(new AddWishCoaching({ wishId: coaching._id }));
      this.toastr.success('Programme ajouté aux favoris avec succés !');
    } else {
      this.store.dispatch(new DeleteWishByIdProgramme(id) );
      this.toastr.warning('Programme supprimé aux favoris avec succés !');
    }

  }

}

