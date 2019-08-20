import { Component, OnInit } from '@angular/core';
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
      name: new FormControl('', Validators.required),
      prenom: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required)
    });
  }

}
