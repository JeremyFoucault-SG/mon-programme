import { Detail } from './detail.model';

export class Muscle {
    constructor(
        public type: string,
        public detail: Detail[]
    ) {}
}
