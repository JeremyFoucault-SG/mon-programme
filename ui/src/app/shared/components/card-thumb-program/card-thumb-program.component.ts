import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';
import { Programmes } from '../../models/programmes.model';
import { Params } from '@angular/router';

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

  @Input()
  point: boolean;

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
  showContentOverlay = false;

  constructor(private elmt: ElementRef) { }

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

  open() {
    this.isOpen = !this.isOpen;
  }

  close() {
    this.isOpen = false;
  }

  addWish() {
    // Not inplement //
  }

  addRating() {
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event) {
    if (!this.elmt.nativeElement.contains(event.target)) {
    this.isOpen = false;
    }
  }
}
