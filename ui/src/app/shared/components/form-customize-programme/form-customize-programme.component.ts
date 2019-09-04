import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-customize-programme',
  templateUrl: './form-customize-programme.component.html',
  styleUrls: ['./form-customize-programme.component.css']
})
export class FormCustomizeProgrammeComponent implements OnInit {

  isHidden = false;
  show = false;

  constructor() { }

  ngOnInit() {
  }

  nextPage() {
    this.show = true;
    this.isHidden = !this.isHidden;
  }

}
