import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { User } from 'src/app/shared/models/user.model';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from 'src/app/core/http/users.service';
import { Settings } from 'src/app/shared/models/settings.model';
import { SettingsService } from 'src/app/core/http/settings.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  constructor(private router: Router, private fb: FormBuilder, private auth: AuthenticationService, private toastr: ToastrService, private setting :SettingsService) { }

  public index = 1;

  myForm = this.fb.group({
    step1: this.fb.group({
      lastname: ['', Validators.required],
      firstname: ['', Validators.required],
      age: ['', Validators.required]
    }),
    step2: this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirm: ['', Validators.required],
    }),
    step3: this.fb.group({
      username: ['', Validators.required],
      objectif: ['', Validators.required],
      weight: ['', Validators.required],
      size: ['', Validators.required],
    })
  });

  indexChange() {
    const isValid = this.myForm.get(`step${this.index}`).valid;
    
    if (isValid && (this.index >= 1 && this.index <= 4)) {
      this.index++;
    }

    if (this.index === 4) {
      this.onSubmit();
    }
  }

  onSubmit() {
    this.toastr.warning('Being create', 'User being Create');
    const formValue = this.myForm.value;
    const setting = {
      ...formValue.step1,
      ...formValue.step2,
      ...formValue.step3,
    };
    this.auth.register(setting)
      .subscribe(
        (client: Settings) => {
          this.myForm.patchValue(client);
          this.toastr.clear();
          this.toastr.success('success', 'User Created');
        },
        (error) => {
          this.toastr.clear();
          this.toastr.error(`Error ${error}`);
        });
  }
  

  return() {
    if (this.index > 1) {
      this.index--;
    } else {
      this.router.navigateByUrl(`login`);
    }
  }

  ngOnInit() {
  }

}
