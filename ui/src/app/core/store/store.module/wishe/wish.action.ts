import { Wishes } from '../../../../shared/models/wishes.model';



// Création d'un wish //
export class AddWish {
    static readonly type = '[wish] Add wish';
    constructor(public payload: Wishes) { }
}

// Récupération de tous les wishes //
export class GetAllWishes {
    static readonly type = '[Wish] Get all wishes';
    constructor() { }
}

// Supression d'un wish //
export class DeleteWish {
    static readonly type = '[Wish] Delete wish';
    constructor(public id: string) { }
}

export class SetSelectedWish {
    static readonly type = '[Wish] Set';
    constructor(public payload: Wishes) { }
}
