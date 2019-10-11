import { Wish } from '../../../../shared/models/wishes.model';
import { QueryWish } from 'src/app/shared/models/queryWish.model';



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
    static readonly type = '[Wish] Get all wishesCoaching';
    constructor(public payload?: QueryWish) { }
}

export class GetAllWishesArticles {
    static readonly type = '[Wish] Get all wishesArticles';
    constructor(public payload?: QueryWish) { }
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
