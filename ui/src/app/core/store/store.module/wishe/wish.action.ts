import { Wish } from '../../../../shared/models/wishes.model';



// Création d'un wish //
export class AddWishCoaching {
    static readonly type = '[Wish] Add wishCoaching';
    constructor(public payload: Wish) { }
}

export class AddWishArticle {
    static readonly type = '[Wish] Add wishArticle';
    constructor(public payload: Wish) { }
}

// Récupération de tous les wishes //
export class GetAllWishesCoaching {
    static readonly type = '[Wish] Get all wisheCoaching';
    constructor() { }
}

export class GetAllWishesArticles {
    static readonly type = '[Wish] Get all wisheArticles';
    constructor() { }
}

// Delete wishArticle
export class DeleteWishArticle {
    static readonly type = '[Blog] Delete wishArticle by id';
    constructor(public id: string) { }
}

// Delete wishCoaching
export class DeleteWishCoaching {
    static readonly type = '[Blog] Delete wishCoaching by id';
    constructor(public id: string) { }
}

export class SetSelectedWish {
    static readonly type = '[Wish] Set';
    constructor(public payload: Wish) { }
}
