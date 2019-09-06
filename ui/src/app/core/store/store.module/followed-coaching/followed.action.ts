import { Followed } from '../../../../shared/models/followed-coachings.model';



// Création d'un followed //
export class AddFollowed {
    static readonly type = '[folo] Add followed';
    constructor(public payload: Followed) { }
}


// Récupération de tous les followed //
export class GetAllFollowed {
    static readonly type = '[folo] Get all followed';
    constructor() { }
}


export class SetSelectedFollowed {
    static readonly type = '[folo] Set';
    constructor(public payload: Followed) { }
}
