import { State, Action, StateContext, Selector, Store } from '@ngxs/store';
import { ArticleBlog } from '../../../../shared/models/articles-blog.model';
import { AddArticle, GetAllArticles, GetByIdArticle, DeleteArticle, SetSelectedArticle, UpdateArticle } from '../article/article.actions';
import { ArticlesService } from 'src/app/core/http/articles.service';
import { tap } from 'rxjs/operators';
import { patch, updateItem } from '@ngxs/store/operators';


export class ArticleStateModel {
    items: ArticleBlog[];
    item: ArticleBlog;
}

@State<ArticleStateModel>({
    name: 'articles',
    defaults: {
        items: [],
        item : null,
    }
})
export class ArticleState {

    constructor(private service: ArticlesService) {
    }

    @Selector()
    static articles(state: ArticleStateModel) {
        console.log('heyyyy');
        return state.items;
    }
    @Selector()
    static article(state: ArticleStateModel) {
        console.log('hoooo');
        return state.item;
    }

    @Action(AddArticle)
    add({ getState, patchState }: StateContext<ArticleStateModel>, { payload }: AddArticle) {
        console.log('ha');
        return this.service.createArticle(payload).pipe(tap(response => {
            const state = getState();
            patchState({
          items: [...state.items, response]
         });

    }));
}

    @Action(GetAllArticles)
    getAll(ctx: StateContext<ArticleStateModel>, action: GetAllArticles) {
        console.log('ffffffff');
        return this.service.getAllArticles().pipe(tap((articles: ArticleBlog[]) => {
            ctx.setState(patch({
                items: articles
            }));
        }));
    }


    @Action(GetByIdArticle)
    getById({getState, setState, patchState}: StateContext<ArticleStateModel>, {id}: GetByIdArticle) {
        return this.service.getArticle(id).pipe(tap(response => {
            const state = getState();
            patchState({...state, item: response});
        }));
    }
    @Action(SetSelectedArticle)
    setSelectedTodoId({ getState, setState }: StateContext<ArticleStateModel>, { payload }: SetSelectedArticle) {
        const state = getState();
        setState({
            ...state,
            item: payload
        });
    }
    @Action(DeleteArticle)
    DeleteArticle({getState, setState}: StateContext<ArticleStateModel>, {id}: DeleteArticle) {
        return this.service.deleteArticle(id).pipe(tap(() => {
            const state = getState();
            const filteredArray = state.items.filter(a => a._id !== id);
            setState({
        ...state,
        items: filteredArray
      });
        }));
    }

    @Action(UpdateArticle)
    UpdateProgramme({ getState, setState }: StateContext<ArticleStateModel>, { payload, id }: UpdateArticle) {
        return this.service.updateArticle(payload, id).pipe(tap((result) => {
            setState(
                patch({
                    items: updateItem<ArticleBlog>(p => p._id === id, result),
                    item: null
                })
            );
        }));
    }
}
