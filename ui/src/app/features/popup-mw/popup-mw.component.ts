import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

/**
 * Popup component used both for home, men and women to enter into app
 */
@Component({
  selector: 'app-popup-mw',
  templateUrl: './popup-mw.component.html',
  styleUrls: ['./popup-mw.component.css']
})
export class PopupMwComponent implements OnInit {

  /**
   * True if popup is for choose between men and women
   */
  @Input()
  isChoose: boolean;

  /**
   * True for Men template
   */
  @Input()
  isMen: boolean;

  /**
   * True for Women template
   */
  @Input()
  isWomen: boolean;

  /**
   * Set text content in middle of pupop (over background of men/wonem, not for choose template)
   */
  @Input()
  textContent: string;

  /**
   * URL of the background popup
   */
  imageUrl: string;

  /**
   * Set url to switch to women or men template
   */
  switchUrl: string;

  /**
   * Only for switch title, can take two values : "homme" or "femme"
   */
  switchTitle: string;

  /**
   * Only for sex title, can take two values : "homme" or "femme"
   */
  sexTitle: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // Set properties according to inputs
    this.setProperties(this.isMen, this.isWomen, this.isChoose, this.textContent, this.imageUrl);

    // If component is not a part of another template component (no @Input set), it's route data component binding
    this.activatedRoute.data.subscribe((data: Data) => {
      this.setProperties(data.isMen, data.isWomen, data.isChoose, data.textContent, data.imageUrl);
    });
  }

  /**
   *
   * @param isMen True for men template
   * @param isWomen True for women template
   * @param isChoose True for choose template (access to men or women)
   */
  setProperties(isMen, isWomen, isChoose, textContent, imageUrl) {
    if (isMen) {
      this.switchUrl = '/femme';
      this.switchTitle = 'femme';
      this.sexTitle = 'homme';
      this.textContent = textContent;
    } else if (isWomen) {
      this.switchUrl = '/homme';
      this.switchTitle = 'homme';
      this.sexTitle = 'femme';
      this.textContent = textContent;
    }

    this.imageUrl = imageUrl;
    this.isChoose = isChoose ? true : false;
  }

}
