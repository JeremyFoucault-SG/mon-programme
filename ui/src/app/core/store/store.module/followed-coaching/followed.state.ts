import { State, Action, StateContext, Selector, Store } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { patch, updateItem } from '@ngxs/store/operators';
import { Followed as Followeds } from 'src/app/shared/models/followed-coachings.model';
import {
    AddFollowed,
    GetAllFollowed, SetSelectedFollowed
} from './followed.action';
import { FollowedcoachingsService } from 'src/app/core/http/followed-coachings.service';


export class FollowedStateModel {
    items: Followeds[];
    item: Followeds;
}

@State<FollowedStateModel>({
    name: 'followed',
    defaults: {
        items: [],
        item: null,

    }
})

export class FollowedState {

    constructor(private service: FollowedcoachingsService) {
    }

    @Selector()
    static programmes(state: FollowedStateModel) {
        console.log('heyyyy');
        return state.items;
    }

    @Selector()
    static Getprogrammes(state: FollowedStateModel) {
        console.log('heyyyy');
        return state.item;
    }

    @Action(GetAllFollowed)
    getAll(ctx: StateContext<FollowedStateModel>, action: GetAllFollowed) {
        console.log('ffffffff');
        return this.service.getAllFollowed().pipe(tap((followed: Followeds[]) => {
            ctx.setState(patch({
                items: followed
            }));
        }));
    }

    @Action(AddFollowed)
    addFollowed({ getState, patchState }: StateContext<FollowedStateModel>, { payload }: AddFollowed) {
        return this.service.addFollowed(payload).pipe(tap((result) => {
            const state = getState();
            patchState({
                items: [...state.items, result]
            });
        }));
    }

    @Action(SetSelectedFollowed)
    setSelectedTodoId({ getState, setState }: StateContext<FollowedStateModel>, { payload }: SetSelectedFollowed) {
        const state = getState();
        setState({
            ...state,
            item: payload
        });
    }
}
