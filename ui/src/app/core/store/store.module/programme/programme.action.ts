import { Programmes } from '../../../../shared/models/programmes.model';



// Création d'un programme //
export class AddProgramme {
    static readonly type = '[Prog] Add programme';
    constructor(public payload: Programmes) { }
}


// Récupération de tous les programmes //
export class GetAllProgramme {
    static readonly type = '[Prog] Get all programmes';
    constructor() { }
}


// Récupération d'un programme par son id //
export class GetByIdProgramme {
    static readonly type = '[Prog] Get programme by id';
    constructor(public id: string) { }
}


// mise à jour d'un programme  //
export class UpdateProgramme {
    static readonly type = '[Prog] Update programme';
    constructor(public payload: Programmes, public id: string) { }
}

// Supression d'un programme //
export class DeleteProgramme {
    static readonly type = '[Prog] Delete programme';
    constructor(public id: string) { }
}

export class SetSelectedProgramme {
    static readonly type = '[Prog] Set';
    constructor(public payload: Programmes) { }
}