import { ArticleBlog } from '../../../../shared/models/articles-blog.model';



// Création d'un article //
export class AddArticle {
    static readonly type = '[Blog] Add';
    constructor(public payload: ArticleBlog) { }
}
// Recuperation de tous les articles
export class GetAllArticles {
    static readonly type = '[Blog] Get all article';
    constructor() { }
}

// Recuperation aricle by id
export class GetByIdArticle {
    static readonly type = '[Blog] Get article by id';
    constructor(public id: string) { }
}

// Delete article
export class DeleteArticle {
    static readonly type = '[Blog] Delete article by id';
    constructor(public id: string) { }
}

