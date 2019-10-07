import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CartState } from 'src/app/core/store/store.module/cart/cart.state';
import { Cart } from 'src/app/shared/models/cart.model';
import { GetAllCarts, DeleteCartCoaching } from 'src/app/core/store/store.module/cart/cart.actions';
import { SumPipe} from '../../shared/pipes/sum.pipe';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {

  paiement = false;
  isHidden = false;

  private sum = 0;
  public total;


  constructor(private store: Store) {
  }

  @Select(CartState.cartCoachings)
  carts: Observable<Cart[]>;

  ngOnInit() {
    this.store.dispatch(new GetAllCarts());
    console.log(this.total);
  }
  deleteCartCoaching(id: string) {
     this.store.dispatch(new DeleteCartCoaching(id));
  }

  nextPage() {
    this.paiement = true;
    this.isHidden = !this.isHidden;
  }

  add(value: number) {
    return this.total.push(value);
  }
  test(value) {
    console.log(value);
  }


}
