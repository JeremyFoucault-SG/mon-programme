import { Component, OnInit, Input } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component implements OnInit {

  constructor(private router: Router) { }

  @Input()
  public formStep2: FormGroup;



  ngOnInit() {
  }

}
