import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor(private router: Router, private fb: FormBuilder) { }

  myForm = this.fb.group({
    infos: this.fb.group({
      name: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmation: ['', Validators.required],
      age: ['', Validators.required],
      pseudo: ['', Validators.required],
      objectif: ['', Validators.required]
    }),
    facturation: this.fb.group({
      address: ['', Validators.required],
      ville: ['', Validators.required],
      cp: ['', Validators.required],
    }),
    paiement: this.fb.group({
      iban: ['', Validators.required],
      rib: ['', Validators.required],
    })
  });

  submit(){
    console.log(this.myForm.value)
  }
  ngOnInit() {
  }

}
