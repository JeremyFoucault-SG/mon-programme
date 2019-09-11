import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  constructor(private router: Router, private fb: FormBuilder) { }

  public index = 1;
  public isForm = true;

  myForm = this.fb.group({
    step1: this.fb.group({
      name: ['', Validators.required],
      prenom: ['', Validators.required],
      age: ['', Validators.required]
    }),
    step2: this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmation: ['', Validators.required],
    }),
    step3: this.fb.group({
      pseudo: ['', Validators.required],
      objectif: [''],
      poids: ['', Validators.required],
      taille: ['', Validators.required],
    })
  });

  indexChange() {
    if (this.index >= 1 && this.index <= 4) {
      this.index++;
      if(this.index >= 4){
        this.isForm = false;
      }
    }
  }
  submit() {
    console.log(this.myForm.value);
  }
  return() {
    if (this.index > 1) {
      this.index--;
    } else {
      this.router.navigateByUrl(`login`);
    }
  }

  ngOnInit() {
  }

}
