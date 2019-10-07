import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { CartState } from 'src/app/core/store/store.module/cart/cart.state';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/shared/models/cart.model';
import { GetAllCarts, DeleteCartCoaching } from 'src/app/core/store/store.module/cart/cart.actions';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  constructor(private store: Store) { }

  @Select(CartState.cartCoachings)
  carts: Observable<Cart[]>;

  ngOnInit() {
    this.store.dispatch(new GetAllCarts());
  }
  deleteCartCoaching(id: string) {
     this.store.dispatch(new DeleteCartCoaching(id));
 
  }

}
