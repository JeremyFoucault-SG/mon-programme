import { Component, OnInit } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css']
})
export class InfosComponent implements OnInit {
  

  constructor() { }

  ngOnInit() {
  }


  onFormSubmit(userForm: NgForm) {
    console.log(userForm);
  }

  submit() {
  }

}
