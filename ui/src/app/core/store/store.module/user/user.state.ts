import { State, Action, StateContext, Selector, Store } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { patch, updateItem, append } from '@ngxs/store/operators';
import { GetUserById } from './user.actions';
import { UsersService } from '../../../http/users.service';
import { User } from 'src/app/shared/models/user.model';


export class UserStateModel {
    items: User[];
    item: User;
}
@State<UserStateModel>({
    name: 'user',
    defaults: {
        items: [],
        item: null,
    }
})
export class UserState {

    constructor(private service: UsersService) {
    }

    @Selector()
    static users(state: UserStateModel) {
        return state.items;
    }
    @Selector()
    static user(state: UserStateModel) {
        return state.item;
    }

    @Action(GetUserById)
    GetUserById({ getState, setState, patchState }: StateContext<UserStateModel>, { id }: GetUserById) {
        return this.service.getUserById(id).pipe(tap(response => {
            const state = getState();
            patchState({ ...state, item: response });
        }));
    }
}