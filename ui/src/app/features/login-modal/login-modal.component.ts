import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import '@github/details-dialog-element';
import { FacebookService, InitParams,  LoginResponse } from 'ngx-facebook';


@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {


  inscription = false;
  isHidden = false;
  login = false;
  isHidden2 = false;

  constructor(private fb: FacebookService) {
    const initParams: InitParams = {
      appId: '1369599999853758',
      xfbml: true,
      version: 'v4.0'
    };

    fb.init(initParams);

  }

  loginWithFacebook(): void { 
    this.fb.login()
      .then((response: LoginResponse) => console.log(response))
      .catch((error: any) => console.error(error));
  }


  ngOnInit() {



  }

  onFormSubmit(userForm: NgForm) {
    console.log(userForm);
  }
  nextPage() {
    this.inscription = true;
    this.isHidden = !this.isHidden;
  }

  nextPage2() {
    this.inscription = false;
    this.login = true;
    this.isHidden2 = !this.isHidden2;
  }

  submit() {
  }

}




