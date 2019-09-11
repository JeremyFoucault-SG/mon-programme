import { Component, OnInit, Input } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit {

  constructor(private router: Router) { }

  @Input()
  public formStep1: FormGroup;

  ngOnInit() {
  }

}
