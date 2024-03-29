import { State, Action, StateContext, Selector, Store } from '@ngxs/store';
import { ArticleBlog } from '../../../../shared/models/articles-blog.model';
import {
    AddArticle,
    GetAllArticles,
    GetArticleByTitle,
    DeleteArticle,
    SetSelectedArticle,
    SearchArticle,
    UpdateArticle,
    SearchNextArticle,
    SearchLastArticle,
    ResetArticle
} from '../article/article.actions';
import { ArticlesService } from 'src/app/core/http/articles.service';
import { tap } from 'rxjs/operators';
import { patch, updateItem, append } from '@ngxs/store/operators';


export class ArticleStateModel {
    items: ArticleBlog[];
    item: ArticleBlog;
    lastItems: ArticleBlog[];
}

@State<ArticleStateModel>({
    name: 'articles',
    defaults: {
        items: [],
        item: null,
        lastItems: [],
    }
})
export class ArticleState {

    constructor(private service: ArticlesService) {
    }

    @Selector()
    static articles(state: ArticleStateModel) {
        return state.items;
    }
    @Selector()
    static article(state: ArticleStateModel) {
        return state.item;
    }
    @Selector()
    static lastArticle(state: ArticleStateModel) {
        return state.lastItems;
    }

    @Action(SearchArticle)
    search(ctx: StateContext<ArticleStateModel>, { payload }: SearchArticle) {
        return this.service.searchArticles(payload).pipe(tap((articles: ArticleBlog[]) => {
            ctx.setState(patch({
                items: articles
            }));
        }));
    }

    @Action(ResetArticle)
    reset(ctx: StateContext<ArticleStateModel>, { payload }: SearchArticle) {
        return ctx.setState(patch({
                items: [] as ArticleBlog[]
            }));

    }

    @Action(SearchLastArticle)
    searchLast(ctx: StateContext<ArticleStateModel>, { payload }: SearchLastArticle) {
        return this.service.searchArticles(payload).pipe(tap((articles: ArticleBlog[]) => {
            ctx.setState(patch({
                lastItems: articles
            }));
        }));
    }


    @Action(SearchNextArticle)
    searchNext(ctx: StateContext<ArticleStateModel>, { payload }: SearchArticle) {
        return this.service.searchArticles(payload).pipe(tap((articles: ArticleBlog[]) => {
            ctx.setState(
            patch({
                items: append(articles)
            }));
        }));
    }
    @Action(AddArticle)
    add({ getState, patchState }: StateContext<ArticleStateModel>, { payload }: AddArticle) {
        return this.service.createArticle(payload).pipe(tap(response => {
            const state = getState();
            patchState({
                items: [...state.items, response]
            });

        }));
    }

    @Action(GetAllArticles)
    getAll(ctx: StateContext<ArticleStateModel>, action: GetAllArticles) {
        return this.service.getAllArticles().pipe(tap((articles: ArticleBlog[]) => {
            ctx.setState(patch({
                items: articles
            }));
        }));
    }


    @Action(GetArticleByTitle)
    getByTitle({ getState, setState, patchState }: StateContext<ArticleStateModel>, { title }: GetArticleByTitle) {
        return this.service.getArticle(title).pipe(tap(response => {
            const state = getState();
            patchState({ ...state, item: response });
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
    DeleteArticle({ getState, setState }: StateContext<ArticleStateModel>, { id }: DeleteArticle) {
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
