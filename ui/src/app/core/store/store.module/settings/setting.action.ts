import { Settings } from '../../../../shared/models/settings.model';



// Récupération d'une option par son id //
export class GetByIdSetting {
    static readonly type = '[Setting] Get Setting by id';
    constructor(public id: string) { }
}

// mise à jour d'une option  //
export class UpdateSetting {
    static readonly type = '[Setting] Update Setting';
    constructor(public payload: Settings, public id: string) { }
}

export class SetSelectedSetting {
    static readonly type = '[Setting] Set';
    constructor(public payload: Settings) { }
}
