import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ModalComponent } from '../../modal/modal.component';
import { Validators, FormBuilder, NgForm, FormGroup } from '@angular/forms';
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

  @ViewChild(ModalComponent, { static: false })
  modal: ModalComponent;


  @Input()
  public formStep2: FormGroup;


  inscription = false;
  isHidden = false;
  login = false;
  isHidden2 = false;




  constructor(private fb: FormBuilder,
              private authService: AuthenticationService,
              private modalService: ModalService,
              private userService: UsersService,
              private auth: AuthenticationService) { }


  ngOnInit() {
  }



}

