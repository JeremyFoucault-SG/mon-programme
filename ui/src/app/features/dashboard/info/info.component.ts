import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder
} from '@angular/forms';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { UserState } from 'src/app/core/store/store.module/user/user.state';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';
import { GetUserById } from 'src/app/core/store/store.module/user/user.actions';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  @Select(UserState.user)
  user: Observable<User[]>;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private store: Store
  ) {}

  myForm = this.fb.group({
    infos: this.fb.group({
      name: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmation: ['', Validators.required],
      age: ['', Validators.required],
      pseudo: ['', Validators.required],
      objectif: ['', Validators.required]
    }),
    facturation: this.fb.group({
      address: ['', Validators.required],
      ville: ['', Validators.required],
      cp: ['', Validators.required]
    }),
    paiement: this.fb.group({
      iban: ['', Validators.required],
      rib: ['', Validators.required]
    })
  });

  public token = localStorage.getItem('token');
  public payload = this.parseJwt(this.token);
  public idUser = this.payload.userId;

  submit() {
    console.log(this.myForm.value);
  }
  ngOnInit() {
    const test = this.store.dispatch(new GetUserById(this.idUser));
  }
  parseJwt(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(c => {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );

    return JSON.parse(jsonPayload);
  }
}
