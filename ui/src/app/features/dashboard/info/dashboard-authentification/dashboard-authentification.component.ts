import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard-authentification',
  templateUrl: './dashboard-authentification.component.html',
  styleUrls: ['./dashboard-authentification.component.css']
})
export class DashboardAuthentificationComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  formAuth = this.fb.group({
    password: ['', Validators.required],
    username: ['', Validators.required]
  });
  ngOnInit() {
  }
  submit() {
    console.log(this.formAuth.value);
  }
}
