import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-info-corporelles',
  templateUrl: './dashboard-info-corporelles.component.html',
  styleUrls: ['./dashboard-info-corporelles.component.css']
})
export class DashboardInfoCorporellesComponent implements OnInit {

  constructor(private router: Router, private fb: FormBuilder) { }

  myForm = this.fb.group({
    sexe: [''],
    taille: [''],
    poids: ['']
  });

  ngOnInit() {
  }

  submit() {

  }
}
