import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-compte-sm',
  templateUrl: './dashboard-compte-sm.component.html',
  styleUrls: ['./dashboard-compte-sm.component.css']
})
export class DashboardCompteSmComponent implements OnInit {
  public myForm: FormGroup;
  constructor(private router: Router) { }


  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl('', Validators.required),
      prenom: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmation: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      pseudo: new FormControl('', Validators.required),
      objectif: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      ville: new FormControl('', Validators.required),
      cp: new FormControl('', Validators.required),
      iban: new FormControl('', Validators.required),
      rib: new FormControl('', Validators.required),
    });
  }
  submit() {
    console.log(this.myForm);
    if (this.myForm.valid) {
      this.router.navigateByUrl(`/`);
    }
  }
}
