import { Bookmarks } from '../../../../shared/models/bookmarks.model';



// Création d'un bookmark //
export class AddBookmark {
    static readonly type = '[Book] Add bookmarks';
    constructor(public payload: Bookmarks) { }
}


// Récupération de tous les bookmark //
export class GetAllBookmarks {
    static readonly type = '[Book] Get all bookmarks';
    constructor() { }
}


// Récupération d'un bookmark par son id //
export class GetByIdBookmark {
    static readonly type = '[Book] Get bookmark by id';
    constructor(public id: string) { }
}


// mise à jour d'un bookmark  //
export class UpdateBookmark {
    static readonly type = '[Book] Update bookmark';
    constructor(public payload: Bookmarks, public id: string) { }
}

// Supression d'un bookmark //
export class DeleteBookmark {
    static readonly type = '[Book] Delete bookmark';
    constructor(public id: string) { }
}

export class SetSelectedBookmark {
    static readonly type = '[Book] Set';
    constructor(public payload: Bookmarks) { }
}
