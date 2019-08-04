import { Component, OnInit, Input } from '@angular/core';

/**
 * Card thumb is used for both thumbs of programs and article
 */
@Component({
  selector: 'app-card-min-nos-programmes',
  templateUrl: './card-min-nos-programmes.component.html',
  styleUrls: ['./card-min-nos-programmes.component.css']
})
export class CardMinNosProgrammesComponent implements OnInit {
  /**
   * Set image in background of card
   */
  @Input()
  imageUrl: string;

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

  /**
   * Open/hide content overlay
   */
  private showContentOverlay = false;

  constructor() { }

  ngOnInit() {
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

  /**
   * Add article to wish list
   */
  addToWishList() {
    throw new Error('Not implemented !');
  }

}
