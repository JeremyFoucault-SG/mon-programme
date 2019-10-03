import { State, Action, StateContext, Selector, Store } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { patch, updateItem } from '@ngxs/store/operators';
import {
    AddBookmark,
    GetAllBookmarks, DeleteBookmark, SetSelectedBookmark
} from './bookmark.action';
import { Bookmarks as Bookmark } from 'src/app/shared/models/bookmarks.model';
import { BookmarksService } from 'src/app/core/http/bookmarks.service';

export class BookmarkStateModel {
    items: Bookmark[];
    item: Bookmark;
}

@State<BookmarkStateModel>({
    name: 'bookmarks',
    defaults: {
        items: [],
        item: null,

    }
})


export class BookmarkState {

    constructor(private service: BookmarksService) {
    }

    @Selector()
    static bookmark(state: BookmarkStateModel) {
        console.log('heyyyy');
        return state.items;
    }

    @Selector()
    static Getbookmarks(state: BookmarkStateModel) {
        console.log('heyyyy');
        return state.item;
    }

    @Action(GetAllBookmarks)
    getAll(ctx: StateContext<BookmarkStateModel>, action: GetAllBookmarks) {
        console.log('ffffffff');
        return this.service.getAllBookmarks().pipe(tap((bookmarks: Bookmark[]) => {
            ctx.setState(patch({
                items: bookmarks
            }));
        }));
    }


    @Action(AddBookmark)
    addBookmark({ getState, patchState }: StateContext<BookmarkStateModel>, { payload }: AddBookmark) {
        return this.service.addBookmarks(payload).pipe(tap((result) => {
            const state = getState();
            patchState({
                items: [...state.items, result]
            });
        }));
    }

    @Action(DeleteBookmark)
    deleteBookmark({ getState, setState }: StateContext<BookmarkStateModel>, { id }: DeleteBookmark) {
        return this.service.deleteBookmarks(id).pipe(tap(() => {
            const state = getState();
            const filteredArray = state.items.filter(item => item._id !== id);
            setState({
                ...state,
                items: filteredArray,
            });
        }));
    }


    @Action(SetSelectedBookmark)
    setSelectedTodoId({ getState, setState }: StateContext<BookmarkStateModel>, { payload }: SetSelectedBookmark) {
        const state = getState();
        setState({
            ...state,
            item: payload
        });
    }
}

