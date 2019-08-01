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
   * @type {boolean}
   * @memberof PopupMwComponent
   */
  @Input()
  isChoose: boolean;

  /**
   * True for Men template
   * @type {boolean}
   * @memberof PopupMwComponent
   */
  @Input()
  isMen: boolean;

  /**
   * True for Women template
   * @type {boolean}
   * @memberof PopupMwComponent
   */
  @Input()
  isWomen: boolean;

  /**
   * Set text content in middle of pupop (over background of men/wonem, not for choose template)
   * @type {string}
   * @memberof PopupMwComponent
   */
  @Input()
  textContent: string;

  /**
   * Set url to switch to women or men template
   * @type {string}
   * @memberof PopupMwComponent
   */
  switchUrl: string;

  /**
   * Only for switch title, can take two values : "homme" or "femme"
   * @type {string}
   * @memberof PopupMwComponent
   */
  switchTitle: string;

  /**
   * Only for sex title, can take two values : "homme" or "femme"
   * @type {string}
   * @memberof PopupMwComponent
   */
  sexTitle: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // Set properties according to inputs
    this.setProperties(this.isMen, this.isWomen, this.isChoose, this.textContent);

    // If component is not a part of another template component (no @Input set), it's route data component binding
    this.activatedRoute.data.subscribe((data: Data) => {
      this.setProperties(data.isMen, data.isWomen, data.isChoose, data.textContent);
    });
  }

  /**
   *
   * @param isMen True for men template
   * @param isWomen True for women template
   * @param isChoose True for choose template (access to men or women)
   */
  setProperties(isMen, isWomen, isChoose, textContent) {
    if (isMen) {
      this.switchUrl = '/women';
      this.switchTitle = 'femme';
      this.sexTitle = 'homme';
      this.textContent = textContent;
    } else if (isWomen) {
      this.switchUrl = '/men';
      this.switchTitle = 'homme';
      this.sexTitle = 'femme';
      this.textContent = textContent;
    }

    this.isChoose = isChoose ? true : false;
  }

}
