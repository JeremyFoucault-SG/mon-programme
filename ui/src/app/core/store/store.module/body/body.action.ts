import { Body } from '../../../../shared/models/body.model';



// Création d'un body //
export class AddBody {
    static readonly type = '[Body] Add body';
    constructor(public payload: Body) { }
}


// mise à jour d'un body  //
export class UpdateBody {
    static readonly type = '[Body] Update body';
    constructor(public payload: Body, public id: string) { }
}


export class SetSelectedBody {
    static readonly type = '[Body] Set';
    constructor(public payload: Body) { }
}
