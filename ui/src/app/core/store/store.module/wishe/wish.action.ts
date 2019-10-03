import { Wish } from '../../../../shared/models/wishes.model';



// Création d'un wish //
export class AddWishCoaching {
    static readonly type = '[Wish] Add wish';
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

// Supression d'un wish //
export class DeleteWish {
    static readonly type = '[Wish] Delete wish';
    constructor(public id: string) { }
}

export class SetSelectedWish {
    static readonly type = '[Wish] Set';
    constructor(public payload: Wish) { }
}
