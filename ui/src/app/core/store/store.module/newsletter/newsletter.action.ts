import { Newsletters } from '../../../../shared/models/newsletters.model';


// Création d'une newsletter //
export class AddNewsletter {
    static readonly type = '[News] Add newsletter';
    constructor(public payload: Newsletters) { }
}


// Supression d'une newsletter //
export class DeleteNewsletter {
    static readonly type = '[News] Delete newsletter';
    constructor(public id: string) { }
}


export class SetSelectedNewsletter {
    static readonly type = '[News] Set';
    constructor(public payload: Newsletters) { }
}