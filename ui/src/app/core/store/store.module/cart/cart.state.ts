import { State, Action, StateContext, Selector, Store } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { patch, updateItem, append, removeItem } from '@ngxs/store/operators';
import {Cart } from '../../../../shared/models/cart.model';
import { CartsService } from '../../../http/carts.service';
import { AddCart, UpdateCart, GetAllCarts, DeleteCartCoaching} from './cart.actions';

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

    @Selector()
    static cartCoachings(state: CartStateModel) {
        return state.items;
    }

    @Selector()
    static count(state: CartStateModel) {
        return state.items.length;
    }

    @Action(AddCart)
    add({ getState, patchState, setState }: StateContext<CartStateModel>, { payload }: AddCart) {
        console.log('ha');
        return this.service.createCart(payload).pipe(tap((result: Cart) => {
            setState(
                patch({
                    items: append([result])
                })
            );

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

    @Action(GetAllCarts)
    getAll(ctx: StateContext<CartStateModel>, action: GetAllCarts) {
        return this.service.getAllCart().pipe(tap((cart: Cart[]) => {
            ctx.setState(patch({
                items: cart
            }));
        }));
    }
    @Action(DeleteCartCoaching)
    deleteCartCoaching({ getState, setState }: StateContext<CartStateModel>, { id }: DeleteCartCoaching) {
        return this.service.deleteCartCoaching(id).pipe(tap(() => {
            setState(
                patch({
                    items: removeItem<Cart>(w => w._id === id)
                })
            );
        }));
    }
}
