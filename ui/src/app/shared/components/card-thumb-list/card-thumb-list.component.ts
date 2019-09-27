import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

/**
 * Display card in an inline scrollable container
 */
@Component({
  selector: 'app-card-thumb-list',
  templateUrl: './card-thumb-list.component.html',
  styleUrls: ['./card-thumb-list.component.css']
})
export class CardThumbListComponent implements OnInit {
  /**
   * Horizontal scrollable container
   */
  @ViewChild('scrollList', { read: ElementRef, static: true }) tref: ElementRef;

  /**
   * If true set title on the right for lg and xl display
   */
  @Input()
  titleOnRight = false;

  constructor() { }

  ngOnInit() {
  }

  /**
   * Scroll to the right, if scroll limit is reached scroll to the begining
   */
  scrollNext() {
    const scroll = this.tref.nativeElement.scrollLeft + this.tref.nativeElement.clientWidth;
    const scrollWidth = this.tref.nativeElement.scrollWidth;

    if (scroll >= scrollWidth) {
      // Scroll to the begining
      this.tref.nativeElement.scrollTo(0, 0);
    } else {
      // Scroll to the right
      this.tref.nativeElement.scrollTo(scroll + 20, 0);

    }

  }

  /**
   * Scroll to the left, if scroll limit is reached go to the end
   */
  scrollPrevious() {

    let scroll = this.tref.nativeElement.scrollLeft - this.tref.nativeElement.clientWidth;

    if (this.tref.nativeElement.scrollLeft === 0) {
      // Set scroll to negatif number if scroll limit is reached
      scroll = -1;
    } else if (scroll < 0) {
      // Set scroll to 0 if scroll is negative number
      scroll = 0;
    }

    if (scroll < 0) {
      // Scroll to the end
      this.tref.nativeElement.scrollTo(this.tref.nativeElement.scrollWidth, 0);
    } else {
      // Scroll to left
      this.tref.nativeElement.scrollTo(scroll - 20, 0);
    }

  }

}
