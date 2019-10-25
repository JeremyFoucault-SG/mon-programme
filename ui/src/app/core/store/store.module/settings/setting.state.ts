import { State, Action, StateContext, Selector, Store } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { patch, updateItem } from '@ngxs/store/operators';
import { Settings as Setting } from 'src/app/shared/models/settings.model';
import {SettingsService } from 'src/app/core/http/settings.service';
import { GetByIdSetting, UpdateSetting, SetSelectedSetting, GetAllSetting } from './setting.action';

export class SettingStateModel {
    items: Setting[];
    item: Setting;
}

@State<SettingStateModel>({
    name: 'settings',
    defaults: {
        items: [],
        item: null,

    }
})


export class SettingState {

    constructor(private service: SettingsService) {
    }

    @Selector()
    static settings(state: SettingStateModel) {
        return state.items;
    }

    @Selector()
    static setting(state: SettingStateModel) {
        return state.item;
    }

    @Action(GetAllSetting)
    getAll(ctx: StateContext<SettingStateModel>, action: GetAllSetting) {
        return this.service.getAllSetting().pipe(tap((setting: Setting[]) => {
            ctx.setState(patch({
                items: setting
            }));
        }));
    }

    @Action(GetByIdSetting)
    getById({ getState, setState, patchState }: StateContext<SettingStateModel>, action: GetByIdSetting) {
        return this.service.getSetting().pipe(tap(respons => {
            const state = getState();
            patchState({ ...state, item: respons });
        }));
    }



    @Action(UpdateSetting)
    UpdateSetting({ getState, setState }: StateContext<SettingStateModel>, { payload}: UpdateSetting) {
        return this.service.updateSettingsUser(payload).pipe(tap((result) => {
            setState(
                patch({
                    item: result,
                })
            );
        }));
    }



    @Action(SetSelectedSetting)
    setSelectedTodoId({ getState, setState }: StateContext<SettingStateModel>, { payload }: SetSelectedSetting) {
        const state = getState();
        setState({
            ...state,
            item: payload
        });
    }
}

