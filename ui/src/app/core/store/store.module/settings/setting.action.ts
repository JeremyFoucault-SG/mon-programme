import { Settings } from '../../../../shared/models/settings.model';


export class GetAllSetting {
    static readonly type = '[Blog] Get all setting';
    constructor() { }
}


// Récupération d'une option par son id //
export class GetByIdSetting {
    static readonly type = '[Setting] Get Setting by id';
    constructor() { }
}

// mise à jour d'une option  //
export class UpdateSetting {
    static readonly type = '[Setting] Update Setting';
    constructor(public payload: Settings) { }
}

export class SetSelectedSetting {
    static readonly type = '[Setting] Set';
    constructor(public payload: Settings) { }
}
