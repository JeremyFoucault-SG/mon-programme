import { Programmes } from './programmes.model';

export class Cart {
    constructor(
        // tslint:disable-next-line: variable-name
        public cartId: string,
        // tslint:disable-next-line: variable-name
        public _id?: string,
        public coaching?: Programmes,
    ) {}
}
