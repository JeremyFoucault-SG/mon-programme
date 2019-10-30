import { Muscle } from './muscles.model';

export class Seance {
    constructor(
        public index: number,
        public repTime: number,
        public muscles: Muscle[],
    ) {}
}
