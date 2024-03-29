import { State, Action, StateContext, Selector, Store } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { patch, updateItem } from '@ngxs/store/operators';
import { Body as Bodies } from 'src/app/shared/models/body.model';
import { BodiesService } from 'src/app/core/http/bodies.service';
import { UpdateBody, AddBody, SetSelectedBody } from './body.action';


// importation du model de body //
export class BodyStateModel {
    items: Bodies[];
    item: Bodies;
}

@State<BodyStateModel>({
    name: 'bodies',
    defaults: {
        items: [],
        item: null,

    }
})


export class BodyState {

    constructor(private service: BodiesService) {
    }

    // Slection du tableau de body //
    @Selector()
    static bodies(state: BodyStateModel) {
        console.log('heyyyy');
        return state.items;
    }


    // Selection d'un body //
    @Selector()
    static GetBodies(state: BodyStateModel) {
        console.log('heyyyy');
        return state.item;
    }


    // Action pour mettre à jour le body //
    @Action(UpdateBody)
    UpdateProgramme({ getState, setState }: StateContext<BodyStateModel>, { payload, id }: UpdateBody) {
        return this.service.updateBody(payload, id).pipe(tap((result) => {
            setState(
                patch({
                    items: updateItem<Bodies>(p => p._id === id, result),
                    item: null
                })
            );
        }));
    }

    // Action pour ajouter un body //
    @Action(AddBody)
    addProgramme({ getState, patchState }: StateContext<BodyStateModel>, { payload }: AddBody) {
        return this.service.addBody(payload).pipe(tap((result) => {
            const state = getState();
            patchState({
                items: [...state.items, result]
            });
        }));
    }

    // Action pour connaitre le body selectionné //
    @Action(SetSelectedBody)
    setSelectedTodoId({ getState, setState }: StateContext<BodyStateModel>, { payload }: SetSelectedBody) {
        const state = getState();
        setState({
            ...state,
            item: payload
        });
    }
}

