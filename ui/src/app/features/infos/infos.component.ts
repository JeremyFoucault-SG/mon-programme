import { Component, OnInit } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { Users } from 'src/app/shared/models/users.model';


@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css']
})
export class InfosComponent implements OnInit {


  model: Users = new Users();

  constructor() { }

  ngOnInit() {
  }
  
  onSubmit() {
    console.log(NgForm);
  }

}
