import { State, Action, StateContext, Selector, Store } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { patch, updateItem, append } from '@ngxs/store/operators';
import { Wish as Wish } from 'src/app/shared/models/wishes.model';
import { WishesService } from 'src/app/core/http/wishes.service';
import {
    AddWishCoaching as AddWishCoaching,
     DeleteWish, SetSelectedWish, AddWishArticle, GetAllWishesCoaching, GetAllWishesArticles
} from './wish.action';

export class WishStateModel {
    items: Wish[];
    item: Wish;
}

@State<WishStateModel>({
    name: 'wish',
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
        return state.items;
    }

    @Selector()
    static Getwishes(state: WishStateModel) {
        return state.item;
    }

    @Action(GetAllWishesCoaching)
    getAllCoachings(ctx: StateContext<WishStateModel>, action: GetAllWishesCoaching) {
        return this.service.getAllWishesCoachings().pipe(tap((wish: Wish[]) => {
            ctx.setState(patch({
                items: wish
            }));
        }));
    }

    @Action(GetAllWishesArticles)
    getAllArticles(ctx: StateContext<WishStateModel>, action: GetAllWishesArticles) {
        return this.service.getAllWishesArticles().pipe(tap((wish: Wish[]) => {
            ctx.setState(patch({
                items: wish
            }));
        }));
    }

    @Action(AddWishCoaching)
    addWishCoaching({ getState, patchState, setState }: StateContext<WishStateModel>, { payload }: AddWishCoaching) {
        return this.service.addWishCoaching(payload).pipe(tap((result: Wish) => {
            setState(
                patch({
                    items: append([result])
                })
            );
        }));
    }

    @Action(AddWishArticle)
    addWishArticle({ getState, patchState, setState }: StateContext<WishStateModel>, { payload }: AddWishArticle) {
        return this.service.addWishArticle(payload).pipe(tap((result: Wish) => {
            setState(
                patch({
                    items: append([result])
                })
            );
        }));
    }

    // @Action(DeleteWish)
    // deleteWish({ getState, setState }: StateContext<WishStateModel>, { id }: DeleteWish) {
    //     return this.service.deleteWish(id).pipe(tap(() => {
    //         const state = getState();
    //         const filteredArray = state.items.filter(item => item._id !== id);
    //         setState({
    //             ...state,
    //             items: filteredArray,
    //         });
    //     }));
    // }

}

