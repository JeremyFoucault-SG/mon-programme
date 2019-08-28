import { ArticleBlog } from '../../../../shared/models/articles-blog.model';



// Recuperation d'un article //
export class RecupArticle {
    static readonly type = '[ArticleBlog] Recup';
    constructor(public titre: string, public photo: string, public desc: string) { }
}

// Recuperation de tous les articles //
export class RecupAlllArticles {
    static readonly type = '[ArticleBlog] RecupAll';
    constructor(public titre: string, public photo: string, public desc: string) { }
}


// Supression d'un article //
export class RemoveArticle {
    static readonly type = '[ArticleBlog] Remove';
    constructor(public titre: string, public photo: string, public desc: string) { }
}


// Ajout d'un article //
export class AddArticle {
    static readonly type = '[ArticleBlog] Add';
    constructor(public titre: string, public photo: string, public desc: string) { }
}


// Mise a jour d'un article //
export class ChangeArticle {
    static readonly type = '[ArticleBlog] Change';
    constructor(public titre: string, public photo: string, public desc: string) { }
}
