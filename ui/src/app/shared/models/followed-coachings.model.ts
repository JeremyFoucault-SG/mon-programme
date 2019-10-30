import { Programme } from './programmes.model';

export class Followed {
    constructor(
        public rating: number,
        public coaching: Programme,
    ) { }
}
