import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component implements OnInit {
  public myForm: FormGroup;
  constructor(private router: Router) { }

  @Input()
  index: number;
  @Output() changeIndex = new EventEmitter();

  indexNext() {
    this.index = 3;
    this.changeIndex.emit({
      value: this.index
    });
  }

  ngOnInit() {
    this.myForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmation: new FormControl('', Validators.required),
    });
  }

  submit() {
    console.log(this.myForm);
    if (this.myForm.valid) {
      this.indexNext();
    }
  }
}
