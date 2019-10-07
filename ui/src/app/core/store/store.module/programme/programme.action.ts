import { Programmes } from '../../../../shared/models/programmes.model';
import { QueryCoaching } from 'src/app/shared/models/query.coaching.interface';

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


export class SearchProgramme {
    static readonly type = '[Prog] Search programme by query';
    constructor(public payload: QueryCoaching) { }
}

export class AddNextProgramme {
    static readonly type = '[prog] Next programme';
    constructor(public payload: QueryCoaching) { }
}


// Recuperation programme by id
export class GetCoachingByTitle {
    static readonly type = '[prog] Get coaching by title';
    constructor(public title: string) { }
}



