import { Component, OnInit } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { User } from 'src/app/shared/models/user.model';


@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css']
})
export class InfosComponent implements OnInit {


  model: User = new User();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(NgForm);
  }

}
