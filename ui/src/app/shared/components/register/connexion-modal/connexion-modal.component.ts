import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ModalComponent } from '../../modal/modal.component';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { AuthenticationService } from '../../../../core/authentication/authentication.service';
import { ModalService } from '../../modal/modal.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-connexion-modal',
  templateUrl: './connexion-modal.component.html',
  styleUrls: ['./connexion-modal.component.css']
})
export class ConnexionModalComponent implements OnInit {

  @ViewChild(ModalComponent, { static: false })
  modal: ModalComponent;

  @Input()
  public formStep1: FormGroup;

  inscription = false;
  isHidden = false;
  login = false;
  isHidden2 = false;


  constructor(private fb: FormBuilder,
              private authService: AuthenticationService,
              private modalService: ModalService,
              private router: Router) {}


  ngOnInit() {
  }

connexion() {
  this.router.navigate(['/login']);
  this.modalService.destroy('');
}

}
