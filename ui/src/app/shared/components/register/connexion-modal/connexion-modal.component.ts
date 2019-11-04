import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { ModalComponent } from '../../modal/modal.component';
import { FormBuilder, Validators, FormGroup, FormControl, NgForm } from '@angular/forms';
import { AuthenticationService } from '../../../../core/authentication/authentication.service';
import { ModalService } from '../../modal/modal.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-connexion-modal',
  templateUrl: './connexion-modal.component.html',
  styleUrls: ['./connexion-modal.component.css']
})
export class ConnexionModalComponent implements OnInit {


// Vu enfant de la modal //
  @ViewChild(ModalComponent, { static: false })
  modal: ModalComponent;


  // Envoi de la donnée au composant parent //
  @Output()
  private stepOne = new EventEmitter<any>();


  // Boolean pour  caché les formulaires //
  inscription = false;
  isHidden = false;
  login = false;
  isHidden2 = false;
  index = 1 ;


// Récupération du formulaire et application des validators //
  myForm1 = this.fb.group({
      firstname: ['', Validators.required],
      name: ['', Validators.required],
      age: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirm: ['', Validators.required]
  });


  constructor(private fb: FormBuilder,
              private authService: AuthenticationService,
              private modalService: ModalService,
              private router: Router) { }


  ngOnInit() {
  }



// Envoi via un output le 1er formulaire d'inscription au composant parent + applique le hiden pour afficher le 2eme formulaire //
  onSubmit() {
    const step1 = this.myForm1.value;
    this.stepOne.emit(step1);
    this.nextPage();
    this.index++;
  }

  // Fonction permetant de caché le 1er forulaire et affiché le 2eme //
  nextPage() {
    this.inscription = true;
    this.isHidden = !this.isHidden;
  }


// Permet de renvoyer sur le formulaire de connexion si l'utlisateur à déja un compte //
connexion() {
    this.router.navigate(['/login']);
    this.modalService.destroy('');
  }

}
