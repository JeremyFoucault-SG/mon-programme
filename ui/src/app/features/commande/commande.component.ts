import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CartState } from 'src/app/core/store/store.module/cart/cart.state';
import { Cart } from 'src/app/shared/models/cart.model';
import { GetAllCarts, DeleteCartCoaching } from 'src/app/core/store/store.module/cart/cart.actions';
import { SumPipe } from '../../shared/pipes/sum.pipe';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { UsersService } from 'src/app/core/http/users.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css'],

})
export class CommandeComponent implements OnInit {

  paiement = false;
  isHidden = false;
  pipes: [SumPipe];
  model: any = {};
  public myForm: FormGroup;
  loading = false;


  constructor(private store: Store,
              private router: Router,
              private usersService: UsersService,
              private toastr: ToastrService) {
  }

  @Select(CartState.cartCoachings)
  carts: Observable<Cart[]>;


  ngOnInit() {
    this.store.dispatch(new GetAllCarts());
    this.myForm = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }
  deleteCartCoaching(id: string) {
    this.store.dispatch(new DeleteCartCoaching(id));
    this.toastr.warning('Programme supprimé du panier !');
  }


  onSubmit(payload) {
    this.loading = true;
    this.usersService.addUserInfos(payload).subscribe(
      () => {
        this.router.navigate(['paiement']);
        this.toastr.success('succes', 'informations enregistrées', {
        });
      },
      (error) => {
        this.loading = false;
        this.toastr.error('Erreur', 'tous les champs ne sont pas saisis', {
        });
      },
    );
  }
}
