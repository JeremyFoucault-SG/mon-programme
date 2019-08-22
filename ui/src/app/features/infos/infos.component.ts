import { Component, OnInit } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { User } from 'src/app/shared/models/user.model';
import { Programmes } from 'src/app/shared/models/programmes.model';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css']
})
export class InfosComponent implements OnInit {

  programmes: Programmes;
  model: User = new User();

  constructor() { }

  ngOnInit() {
  }


  onSubmit(myForm) {
    if (myForm.form.valid) {
      alert('Form submitted sucessfully');

    }
  }

}
