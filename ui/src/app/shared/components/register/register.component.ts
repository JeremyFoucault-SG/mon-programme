import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl } from '@angular/forms';
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
  index = 1;


// Récupération des output par le biai de l'html //
  public step1: any;
  public step2: any;


  ngOnInit() {
  }


// soumission pour inscription du 1er formulaire via le bouton étape suivante//
  onGetStepOne(step1: any) {
    this.step1 = step1;
    console.log(step1);
  }


  // soumission pour inscription du 2eme formulaire via le bouton connexion + renvoie l'utilisateur sur la page de connexion//
  onGetStepTwo(step2: any) {
    this.step2 = step2;
    console.log(step2);
    const form = {
      ...this.step1,
      ...this.step2
    };
  
    this.auth.register(form)
      .subscribe(
        // tslint:disable-next-line: no-shadowed-variable
        (res: Register) => {
          this.router.navigate(['/login']);
          this.toastr.clear();
        },
        (error) => {
          this.toastr.clear();
          this.toastr.error('Erreur!', 'Erreur lors de la sauvegarde');
        });
  }


}