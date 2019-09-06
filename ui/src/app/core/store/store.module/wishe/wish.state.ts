import { State, Action, StateContext, Selector, Store } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { patch, updateItem } from '@ngxs/store/operators';
import { Wishes as Wish } from 'src/app/shared/models/wishes.model';
import { WishesService } from 'src/app/core/http/wishes.service';
import {
    AddWish,
    GetAllWishes, DeleteWish, SetSelectedWish
} from './wish.action';

export class WishStateModel {
    items: Wish[];
    item: Wish;
}

@State<WishStateModel>({
    name: 'wishes',
    defaults: {
        items: [],
        item: null,

    }
})


export class WishState {

    constructor(private service: WishesService) {
    }

    @Selector()
    static wish(state: WishStateModel) {
        console.log('heyyyy');
        return state.items;
    }

    @Selector()
    static Getwishes(state: WishStateModel) {
        console.log('heyyyy');
        return state.item;
    }

    @Action(GetAllWishes)
    getAll(ctx: StateContext<WishStateModel>, action: GetAllWishes) {
        console.log('ffffffff');
        return this.service.getAllWishes().pipe(tap((wishes: Wish[]) => {
            ctx.setState(patch({
                items: wishes
            }));
        }));
    }


    @Action(AddWish)
    addWish({ getState, patchState }: StateContext<WishStateModel>, { payload }: AddWish) {
        return this.service.addWish(payload).pipe(tap((result) => {
            const state = getState();
            patchState({
                items: [...state.items, result]
            });
        }));
    }

    @Action(DeleteWish)
    deleteWish({ getState, setState }: StateContext<WishStateModel>, { id }: DeleteWish) {
        return this.service.deleteWish(id).pipe(tap(() => {
            const state = getState();
            const filteredArray = state.items.filter(item => item._id !== id);
            setState({
                ...state,
                items: filteredArray,
            });
        }));
    }


    @Action(SetSelectedWish)
    setSelectedTodoId({ getState, setState }: StateContext<WishStateModel>, { payload }: SetSelectedWish) {
        const state = getState();
        setState({
            ...state,
            item: payload
        });
    }
}

