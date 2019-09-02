import { ArticleBlog } from '../../../../shared/models/articles-blog.model';



// Création d'un article //
export class AddArticle {
    static readonly type = '[Blog] Add';
    constructor(public payload: ArticleBlog) { }
}

export class GetAllArticles {
    static readonly type = '[Blog] Get all article';
    constructor() { }
}


export class GetByIdArticle {
    static readonly type = '[Blog] Get article by id';
    constructor(public id: string) { }
}
export class DeleteArticle {
    static readonly type = '[Blog] Delete article by id';
    constructor(public id: string) { }
}

