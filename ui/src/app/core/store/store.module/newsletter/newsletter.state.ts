import { State, Action, StateContext, Selector, Store } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { patch, updateItem } from '@ngxs/store/operators';
import {
    AddNewsletter,
     DeleteNewsletter, SetSelectedNewsletter
} from './newsletter.action';
import { Newsletters as Newsletter } from 'src/app/shared/models/newsletters.model';
import { NewsletterService } from 'src/app/core/http/newsletter.service';

export class NewsletterStateModel {
    items: Newsletter[];
    item: Newsletter;
}

@State<NewsletterStateModel>({
    name: 'newsletters',
    defaults: {
        items: [],
        item: null,

    }
})


export class NewsletterState {

    constructor(private service: NewsletterService) {
    }

    @Selector()
    static newsletter(state: NewsletterStateModel) {
        console.log('heyyyy');
        return state.items;
    }

    @Selector()
    static Getnewsletters(state: NewsletterStateModel) {
        console.log('heyyyy');
        return state.item;
    }


    @Action(AddNewsletter)
    addBookmark({ getState, patchState }: StateContext<NewsletterStateModel>, { payload }: AddNewsletter) {
        return this.service.addNewsletter(payload).pipe(tap((result) => {
            const state = getState();
            patchState({
                items: [...state.items, result]
            });
        }));
    }

    @Action(DeleteNewsletter)
    deleteBookmark({ getState, setState }: StateContext<NewsletterStateModel>, { id }: DeleteNewsletter) {
        return this.service.deleteNewsletter(id).pipe(tap(() => {
            const state = getState();
            const filteredArray = state.items.filter(item => item._id !== id);
            setState({
                ...state,
                items: filteredArray,
            });
        }));
    }


    @Action(SetSelectedNewsletter)
    setSelectedTodoId({ getState, setState }: StateContext<NewsletterStateModel>, { payload }: SetSelectedNewsletter) {
        const state = getState();
        setState({
            ...state,
            item: payload
        });
    }
}

