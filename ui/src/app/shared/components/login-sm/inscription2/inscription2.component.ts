import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inscription2',
  templateUrl: './inscription2.component.html',
  styleUrls: ['./inscription2.component.css']
})
export class Inscription2Component implements OnInit {
  public myForm: FormGroup;
  constructor(private router: Router) { }


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
      this.router.navigateByUrl(`inscription-3`);
    }
  }
}
