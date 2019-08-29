import { State, Action, StateContext, Selector, Store } from '@ngxs/store';
import { ArticleBlog } from '../../../../shared/models/articles-blog.model';
import { AddArticle, GetAllArticles, GetByIdArticle } from '../article/article.actions';
import { ArticlesService } from 'src/app/core/http/articles.service';
import { tap } from 'rxjs/operators';
import { patch } from '@ngxs/store/operators';
import { identifierModuleUrl } from '@angular/compiler';

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

    @Action(AddArticle)
    add({ getState, patchState }: StateContext<ArticleStateModel>, { payload }: AddArticle) {
        const state = getState();
        patchState({
            items: [...state.items, payload]
        });
    }

    @Action(GetAllArticles)
    getAll(ctx: StateContext<ArticleStateModel>, action: GetAllArticles) {
        console.log('ffffffff')
        return this.service.getAllArticles().pipe(tap((articles: ArticleBlog[]) => {
            ctx.setState(patch({
                items: articles
            }));
        }));
    }


    @Action(GetByIdArticle)
    getById({getState, setState, patchState}: StateContext<ArticleStateModel>, {id}: GetByIdArticle) {
        return this.service.getArticle(id).pipe(tap(respons => {
            const state = getState();
            patchState({...state, item: respons});
        }));
    }
}