import { State, Action, StateContext, Selector, Store } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { patch, updateItem, append } from '@ngxs/store/operators';
import { GetUserById } from './user.actions';
import { UsersService } from '../../../http/users.service';
import { User } from 'src/app/shared/models/user.model';


export class UserStateModel {
    item: User;
}
@State<UserStateModel>({
    name: 'user',
    defaults: {
        item: null,
    }
})
export class UserState {

    constructor(private service: UsersService) {
    }

    @Selector()
    static user(state: UserStateModel) {
        return state.item;
    }

    @Action(GetUserById)
    GetUserById({ getState, setState, patchState }: StateContext<UserStateModel>, action: GetUserById) {
        return this.service.getUserById().pipe(tap(response => {
            const state = getState();
            patchState({ ...state, item: response });
        }));
    }
    // @Action(UpdateUser)
    // UpdateUser({ getState, setState }: StateContext<UserStateModel>, { payload}: UpdateUser) {
    //     return this.service.updateUser(payload).pipe(tap((result) => {
    //         setState(
    //             patch({
    //                 item: result,
    //             })
    //         );
    //     }));
    // }
}
