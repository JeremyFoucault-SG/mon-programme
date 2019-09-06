import { State, Action, StateContext, Selector, Store } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { patch, updateItem } from '@ngxs/store/operators';
import { Programmes as Programme } from 'src/app/shared/models/programmes.model';
import { CoachingsService } from 'src/app/core/http/coachings.service';
import { AddProgramme,
     GetAllProgramme, GetByIdProgramme, UpdateProgramme, DeleteProgramme, SetSelectedProgramme } from './programme.action';

export class ProgrammeStateModel {
    items: Programme[];
    item: Programme;
}

@State<ProgrammeStateModel>({
    name: 'programmes',
    defaults: {
        items: [],
        item: null,

    }
})


export class ProgrammeState {

    constructor(private service: CoachingsService) {
    }

    @Selector()
    static programmes(state: ProgrammeStateModel) {
        console.log('heyyyy');
        return state.items;
    }

    @Selector()
    static Getprogrammes(state: ProgrammeStateModel) {
        console.log('heyyyy');
        return state.item;
    }

    @Action(GetAllProgramme)
    getAll(ctx: StateContext<ProgrammeStateModel>, action: GetAllProgramme) {
        console.log('ffffffff');
        return this.service.getAllProgrammes().pipe(tap((programmes: Programme[]) => {
            ctx.setState(patch({
                items: programmes
            }));
        }));
    }


    @Action(GetByIdProgramme)
    getById({ getState, setState, patchState }: StateContext<ProgrammeStateModel>, { id }: GetByIdProgramme) {
        return this.service.getProgramme(id).pipe(tap(respons => {
            const state = getState();
            patchState({ ...state, item: respons });
        }));
    }



    @Action(UpdateProgramme)
    UpdateProgramme({ getState, setState }: StateContext<ProgrammeStateModel>, { payload, id }: UpdateProgramme) {
        return this.service.updateProgramme(payload, id).pipe(tap((result) => {
            setState(
                patch({
                    items: updateItem<Programme>(p => p._id === id, result),
                    item: null
                })
            );
        }));
    }


    @Action(AddProgramme)
    addProgramme({ getState, patchState }: StateContext<ProgrammeStateModel>, { payload }: AddProgramme) {
        return this.service.addProgramme(payload).pipe(tap((result) => {
            const state = getState();
            patchState({
                items: [...state.items, result]
            });
        }));
    }

    @Action(DeleteProgramme)
    deleteProgramme({ getState, setState }: StateContext<ProgrammeStateModel>, { id }: DeleteProgramme) {
        return this.service.deleteProgramme(id).pipe(tap(() => {
            const state = getState();
            const filteredArray = state.items.filter(item => item._id !== id);
            setState({
                ...state,
                items: filteredArray,
            });
        }));
    }


    @Action(SetSelectedProgramme)
    setSelectedTodoId({ getState, setState }: StateContext<ProgrammeStateModel>, { payload }: SetSelectedProgramme) {
        const state = getState();
        setState({
            ...state,
            item: payload
        });
    }
}

