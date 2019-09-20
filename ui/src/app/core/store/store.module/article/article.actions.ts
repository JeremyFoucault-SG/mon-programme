import { ArticleBlog } from '../../../../shared/models/articles-blog.model';
import { QueryArticles } from 'src/app/shared/models/queryArticles.model';



// Création d'un article //
export class AddArticle {
    static readonly type = '[Blog] Add';
    constructor(public payload: ArticleBlog) { }
}

export class SearchArticle {
    static readonly type = '[Blog] search articles';
    constructor(public payload: QueryArticles ) {}
}
// Recuperation de tous les articles
export class GetAllArticles {
    static readonly type = '[Blog] Get all article';
    constructor() { }
}

// Recuperation aricle by id
export class GetArticleByTitle {
    static readonly type = '[Blog] Get article by title';
    constructor(public title: string) { }
}

// Delete article
export class DeleteArticle {
    static readonly type = '[Blog] Delete article by id';
    constructor(public id: string) { }
}
export class SetSelectedArticle {
    static readonly type = '[Blog] Set';
    constructor(public payload: ArticleBlog) { }
}
export class UpdateArticle {
    static readonly type = '[Blog] Update article';
    constructor(public payload: ArticleBlog, public id: string) { }
}

