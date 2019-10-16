import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../core/authentication/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { ModalService } from '../modal/modal.service';
import { FacebookService, InitParams, LoginResponse } from 'ngx-facebook';


@Component({
  selector: 'app-connexion-modal',
  templateUrl: './connexion-modal.component.html',
  styleUrls: ['./connexion-modal.component.css']
})
export class ConnexionModalComponent implements OnInit {

  @ViewChild(ModalComponent, { static: false })
  modal: ModalComponent;



  inscription = false;
  isHidden = false;
  login = false;
  isHidden2 = false;

  myForm = this.fb.group({
    firstname: ['', [Validators.required]],
    name: ['', [Validators.required]],
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
    confirm: ['', [Validators.required]],
    age: ['', [Validators.required]],
  });


  constructor(private fb: FormBuilder,
              private authService: AuthenticationService,
              private modalService: ModalService) {}


  ngOnInit() {
  }


  nextPage() {
    this.inscription = true;
    this.isHidden = !this.isHidden;
  }

}
