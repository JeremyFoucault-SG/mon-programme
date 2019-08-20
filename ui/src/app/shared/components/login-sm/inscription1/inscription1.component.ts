import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription1',
  templateUrl: './inscription1.component.html',
  styleUrls: ['./inscription1.component.css']
})
export class Inscription1Component implements OnInit {
  public myForm: FormGroup;
  constructor(private router: Router) { }


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
      this.router.navigateByUrl(`inscription-2`);
    }
  }
}
