import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { ModalComponent } from '../../modal/modal.component';
import { Validators, FormBuilder, NgForm, FormGroup, FormControl } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { ModalService } from '../../modal/modal.service';
import { UsersService } from 'src/app/core/http/users.service';
import { Register } from 'src/app/shared/models/register.model';

@Component({
  selector: 'app-connexion-modal2',
  templateUrl: './connexion-modal2.component.html',
  styleUrls: ['./connexion-modal2.component.css']
})
export class ConnexionModal2Component implements OnInit {

// Vu enfant de la modal //
  @ViewChild(ModalComponent, { static: false })
  modal: ModalComponent;


 // Envoi de la donnée au composant parent //
  @Output()
  private stepTwo = new EventEmitter<any>();

// Boolean pour  caché les formulaires //
  inscription = false;
  isHidden = false;
  login = false;
  isHidden2 = false;
  index = 1 ;


// Récupération du formulaire et application des validators //
  myForm2 = this.fb.group({
      username: ['', Validators.required],
      goals: [],
      weight: ['', Validators.required],
      size: ['', Validators.required],
  });


  constructor(private fb: FormBuilder,
              private authService: AuthenticationService,
              private modalService: ModalService,
              private userService: UsersService,
              private auth: AuthenticationService) { }


  ngOnInit() {
  }



// Envoi via un output le 2eme formulaire d'inscription au composant parent + applique le hiden pour afficher le 2eme formulaire //
  onSubmit() {
    const step2 = this.myForm2.value;
    this.stepTwo.emit(step2);
    console.log(step2);
  }


}

