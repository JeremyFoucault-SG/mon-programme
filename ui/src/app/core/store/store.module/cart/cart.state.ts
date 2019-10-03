import { State, Action, StateContext, Selector, Store } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { patch, updateItem } from '@ngxs/store/operators';
import {Cart } from '../../../../shared/models/cart.model';
import { CartsService } from '../../../http/carts.service';
import { AddCart, UpdateCart, GetAllCart} from './cart.actions';

export class CartStateModel {
    items: Cart[];
    item: Cart;
}


@State<CartStateModel>({
    name: 'cart',
    defaults: {
        items: [],
        item : null,
    }
})

export class CartState {

    constructor(private service: CartsService) {
    }

    @Action(AddCart)
    add({ getState, patchState }: StateContext<CartStateModel>, { payload }: AddCart) {
        console.log('ha');
        return this.service.createCart(payload).pipe(tap(response => {
            const state = getState();
            patchState({
          items: [...state.items, response]
         });

    }));
    }

    @Action(UpdateCart)
    UpdateProgramme({ getState, setState }: StateContext<CartStateModel>, { payload, id }: UpdateCart) {
        return this.service.updateCart(payload, id).pipe(tap((result) => {
            setState(
                patch({
                    items: updateItem<Cart>(p => p._id === id, result),
                    item: null
                })
            );
        }));
    }

    @Action(GetAllCart)
    getAll(ctx: StateContext<CartStateModel>, action: GetAllCart) {
        return this.service.getAllCart().pipe(tap((cart: Cart[]) => {
            ctx.setState(patch({
                items: cart
            }));
        }));
    }
}
