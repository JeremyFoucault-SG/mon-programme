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


// Supression d'un bookmark //
export class DeleteBookmark {
    static readonly type = '[Book] Delete bookmark';
    constructor(public id: string) { }
}

export class SetSelectedBookmark {
    static readonly type = '[Book] Set';
    constructor(public payload: Bookmarks) { }
}
