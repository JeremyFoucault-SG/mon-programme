import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { Validators, FormBuilder, NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { ModalService } from '../modal/modal.service';
import { UsersService } from 'src/app/core/http/users.service';
import { ToastrService } from 'ngx-toastr';
import { Register } from 'src/app/shared/models/register.model';

@Component({
  selector: 'app-connexion-modal2',
  templateUrl: './connexion-modal2.component.html',
  styleUrls: ['./connexion-modal2.component.css']
})
export class ConnexionModal2Component implements OnInit {

  @ViewChild(ModalComponent, { static: false })
  modal: ModalComponent;



  inscription = false;
  isHidden = false;
  login = false;
  isHidden2 = false;

  step2 = this.fb.group({
      username: ['', Validators.required],
      goals: ['', Validators.required],
      weight: ['', Validators.required],
      size: ['', Validators.required],
  });



  constructor(private fb: FormBuilder,
              private authService: AuthenticationService,
              private modalService: ModalService,
              private userService: UsersService,
              private auth: AuthenticationService,
              private toastr: ToastrService, ) { }


  ngOnInit() {
  }

  onSubmit() {
    this.toastr.success('succés', 'Utilisateur Créé');
    const formValue = this.step2.value;
    const register = {
      ...formValue.myForm,
      ...formValue.step2,
    };
    this.auth.register(register)
      .subscribe(
        // tslint:disable-next-line: no-shadowed-variable
        (register: Register) => {
          this.step2.patchValue(register);
          this.toastr.clear();
          this.toastr.success('success', 'User Created');
          this.modal.removeModal();
        },
        (error) => {
          this.toastr.clear();
          this.toastr.error(`Error ${error}`);
        });

  }
}

