import {Typegoose, prop} from 'typegoose';

export class WishModel extends Typegoose {
    @prop()
    createdAt: Date;
}
