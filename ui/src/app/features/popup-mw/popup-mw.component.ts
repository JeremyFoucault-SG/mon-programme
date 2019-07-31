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

  @Input()
  isChoose: boolean;

  @Input()
  isMen: boolean;

  @Input()
  isWomen: boolean;

  switchUrl: string;
  sex: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.setProperty(this.isMen, this.isWomen, this.isChoose);

    this.activatedRoute.data.subscribe((data: Data) => {
      this.setProperty(data.isMen, data.isWomen, data.isChoose);
    });
  }

  setProperty(isMen, isWomen, isChoose) {
    if (isMen) {
      this.switchUrl = '/women';
      this.sex = 'homme';
    } else if (isWomen) {
      this.switchUrl = '/man';
      this.sex = 'femme';
    }

    this.isChoose = isChoose ? true : false;
  }

}
