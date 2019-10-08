import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CartState } from 'src/app/core/store/store.module/cart/cart.state';
import { Cart } from 'src/app/shared/models/cart.model';
import { GetAllCarts, DeleteCartCoaching } from 'src/app/core/store/store.module/cart/cart.actions';
import { SumPipe } from '../../shared/pipes/sum.pipe';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent implements OnInit {

  paiement = false;
  isHidden = false;
  pipes: [SumPipe];

  constructor(private store: Store, private toastr: ToastrService) { }

  @Select(CartState.cartCoachings)
  carts: Observable<Cart[]>;



  ngOnInit() {
    this.store.dispatch(new GetAllCarts());
  }
  deleteCartCoaching(id: string) {
    this.store.dispatch(new DeleteCartCoaching(id));
    this.toastr.warning('Programme supprimé du panier !');
  }


}
