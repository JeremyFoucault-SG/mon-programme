import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngxs/store';
import { GetAllWishesArticles, GetAllWishesCoaching } from 'src/app/core/store/store.module/wishe/wish.action';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalService } from 'src/app/shared/components/modal/modal.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  model: any = {};
  loading = false;

  public myForm: FormGroup;

  // Vu enfant de la modal //
  @ViewChild(ModalComponent, { static: false })
  modal: ModalComponent;

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private modalService: ModalService,
    private store: Store,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.myForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    this.loading = true;
    this.authService.login(this.model.username, this.model.password).subscribe(
      () => {
        this.modalService.destroy('');
      },
      error => {
        this.loading = false;
        this.toastr.error(
          'Erreur',
          'Mot de passe ou identifiant incorrect',
          {}
        );
      }
    );
  }
}
