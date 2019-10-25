import { Settings } from './settings.model';

export class User {
    constructor(
        // tslint:disable-next-line: variable-name
        public _id?: string,
        public settings?: Settings,
    ) { }
}
