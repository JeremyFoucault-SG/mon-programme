import { Component, OnInit } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { User } from 'src/app/shared/models/user.model';
import { Programmes } from 'src/app/shared/models/programmes.model';

@Component({
  selector: 'app-dashboard-info-lg',
  templateUrl: './dashboard-info-lg.component.html',
  styleUrls: ['./dashboard-info-lg.component.css']
})
export class DashboardInfoLgComponent implements OnInit {

  programmes: Programmes;
  model: User = new User();

  constructor() { }

  ngOnInit() {
  }


  // onSubmit(myForm) {
  //   if (myForm.form.valid) {
  //     alert('Form submitted sucessfully');

  //   }
  // }
}
