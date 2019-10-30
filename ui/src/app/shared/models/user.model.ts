import { Settings } from './settings.model';
import { Followed } from './followed-coachings.model';

export class User {
    constructor(
        // tslint:disable-next-line: variable-name
        public _id?: string,
        public settings?: Settings,
        public myCoachings?: Followed,
    ) { }
}
