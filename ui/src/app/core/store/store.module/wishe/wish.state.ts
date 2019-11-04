import { State, Action, StateContext, Selector, Store } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { patch, updateItem, append, removeItem } from '@ngxs/store/operators';
import { Wish as Wish } from 'src/app/shared/models/wishes.model';
import { WishesService } from 'src/app/core/http/wishes.service';
import {
    AddWishCoaching as AddWishCoaching,
    AddWishArticle, GetAllWishesCoaching, GetAllWishesArticles, DeleteWishArticle, DeleteWishCoaching, DeleteWishByIdArticle
} from './wish.action';
import { filter } from 'minimatch';

export class WishStateModel {
    coachings: Wish[];
    articles: Wish[];
}

@State<WishStateModel>({
    name: 'wish',
    defaults: {
        coachings: [],
        articles: [],
    }
})
export class WishState {

    constructor(private service: WishesService, private store: Store) {
    }

    @Selector()
    static wish(state: WishStateModel) {
        return [...state.articles, ...state.coachings];
    }

    @Selector()
    static wishArticles(state: WishStateModel) {
        return state.articles;
    }

    @Selector()
    static wishCoachings(state: WishStateModel) {
        return state.coachings;
    }

    @Action(GetAllWishesCoaching)
    getAllCoachings(ctx: StateContext<WishStateModel>, {payload}: GetAllWishesCoaching) {
        return this.service.getAllWishesCoachings(payload).pipe(tap((wish: Wish[]) => {
            ctx.setState(patch({
                coachings: wish
            }));
        }));
    }

    @Action(GetAllWishesArticles)
    getAllArticles(ctx: StateContext<WishStateModel>, {payload}: GetAllWishesArticles) {
        return this.service.getAllWishesArticles(payload).pipe(tap((wish: Wish[]) => {
            ctx.setState(patch({
                articles: wish
            }));
        }));
    }

    @Action(AddWishCoaching)
    addWishCoaching({ getState, patchState, setState }: StateContext<WishStateModel>, { payload }: AddWishCoaching) {
        return this.service.addWishCoaching(payload).pipe(tap((result: Wish) => {
            setState(
                patch({
                    coachings: append([result])
                })
            );
        }));
    }

    @Action(AddWishArticle)
    addWishArticle({ getState, patchState, setState }: StateContext<WishStateModel>, { payload }: AddWishArticle) {
        return this.service.addWishArticle(payload).pipe(tap((result: Wish) => {
            setState(
                patch({
                    articles: append([result])
                })
            );
        }));
    }

    @Action(DeleteWishArticle)
    deleteWishArticle({ getState, setState }: StateContext<WishStateModel>, { id }: DeleteWishArticle) {
        return this.service.deleteWish(id).pipe(tap(() => {
            setState(
                patch({
                    articles: removeItem<Wish>(w => w._id === id)
                })
            );
        }));
    }

    @Action(DeleteWishByIdArticle)
    deleteWishByIdArticle({ getState, setState }: StateContext<WishStateModel>, { id }: DeleteWishByIdArticle) {
        const wish = getState().articles.find(w => w.article._id === id);
        return this.service.deleteWish(wish._id).pipe(tap(() => {
            setState(
                patch({
                    articles: removeItem<Wish>(w => w.article._id === id)
                })
            );
        }));
    }


    @Action(DeleteWishCoaching)
    deleteWishCoaching({ getState, setState }: StateContext<WishStateModel>, { id }: DeleteWishCoaching) {
        return this.service.deleteWish(id).pipe(tap(() => {
            setState(
                patch({
                    coachings: removeItem<Wish>(w => w._id === id)
                })
            );
        }));
    }


}

