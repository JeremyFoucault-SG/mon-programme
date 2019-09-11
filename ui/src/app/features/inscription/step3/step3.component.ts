import { Component, OnInit, Input } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css']
})
export class Step3Component implements OnInit {

  constructor(private router: Router) { }

  @Input()
  public formStep3: FormGroup;

  ngOnInit() {
    console.log(this.formStep3);
  }


}
