import {Cart } from '../../../../shared/models/cart.model';

export class AddCart {
    static readonly type = '[Cart] Add';
    constructor(public payload: Cart) { }
}

export class UpdateCart {
    static readonly type = '[Cart] Update cart';
    constructor(public payload: Cart, public id: string) { }
}

export class GetAllCart {
    static readonly type = '[Cart] Get all cart';
    constructor() { }


}
