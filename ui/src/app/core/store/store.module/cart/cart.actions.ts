import {Cart } from '../../../../shared/models/cart.model';

export class AddCart {
    static readonly type = '[Cart] Add';
    constructor(public payload: Cart) { }
}

export class UpdateCart {
    static readonly type = '[Cart] Update cart';
    constructor(public payload: Cart, public id: string) { }
}

export class GetAllCarts {
    static readonly type = '[Cart] Get all cart';
    constructor() { }


}

export class DeleteCartCoaching {
    static readonly type = '[Blog] Delete cartCoaching by id';
    constructor(public id: string) { }
}
