import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css']
})
export class Step3Component implements OnInit {
  public myForm: FormGroup;
  constructor(private router: Router) { }


  @Input()
  index: number;
  @Output() changeIndex = new EventEmitter();

  indexNext() {
    this.index = 4;
    this.changeIndex.emit({
      value: this.index
    });
  }

  ngOnInit() {
    this.myForm = new FormGroup({
      pseudo: new FormControl('', Validators.required),
      poids: new FormControl('', Validators.required),
      taille: new FormControl('', Validators.required),
    });
  }

  submit() {
    console.log(this.myForm);
    if (this.myForm.valid) {
      this.indexNext();
    }
  }
}
