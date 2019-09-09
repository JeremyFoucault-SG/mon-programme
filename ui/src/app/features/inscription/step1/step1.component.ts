import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit {
  public myForm: FormGroup;
  constructor(private router: Router) { }

  @Input()
  index: number;
  @Output() changeIndex = new EventEmitter();

  indexNext() {
    this.index = 2;
    this.changeIndex.emit({
      value: this.index
    });
  }
  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl('', Validators.required),
      prenom: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required)
    });
  }
  submit() {
    console.log(this.myForm);
    if (this.myForm.valid) {
      this.indexNext();
    }
  }
}
