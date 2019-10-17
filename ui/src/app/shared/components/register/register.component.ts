import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { SettingsService } from 'src/app/core/http/settings.service';
import { Register } from '../../models/register.model';
import { ToastrService } from 'ngx-toastr';
import { ModalService } from '../modal/modal.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

public index = 1;

  constructor(private router: Router,
              private fb: FormBuilder,
              private auth: AuthenticationService,
              private setting: SettingsService,
              private toastr: ToastrService,
              private modalService: ModalService) { }


  inscription = false;
  isHidden = false;
  login = false;
  isHidden2 = false;

  myForm = this.fb.group({
    step1: this.fb.group({
      firstname: ['', Validators.required],
      name: ['', Validators.required],
      age: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirm: ['', Validators.required]
    }),
    step2: this.fb.group({
      username: ['', Validators.required],
      goals: ['', Validators.required],
      weight: ['', Validators.required],
      size: ['', Validators.required],
    }),
  });

  ngOnInit() {
  }
  onSubmit() {
    this.toastr.success('succés', 'Utilisateur Créé');
    const formValue = this.myForm.value;
    const register = {
      ...formValue.step1,
      ...formValue.step2,
    };
    console.log(register);
    this.auth.register(register)
      .subscribe(
        // tslint:disable-next-line: no-shadowed-variable
        (res: Register) => {
          this.router.navigate(['/login']);
          this.toastr.clear();
        },
        (error) => {
          this.toastr.clear();
          this.toastr.error(`Error ${error}`);
        });
  }

  nextPage() {
    this.inscription = true;
    this.isHidden = !this.isHidden;
  }

  indexChange() {
    const isValid = this.myForm.get(`step${this.index}`).valid;
    if (isValid && (this.index >= 0 && this.index < 2)) {
      this.nextPage();
      this.index++;
      return;
    }

    if (this.index === 2) {
      this.onSubmit();
    }
  }



}
