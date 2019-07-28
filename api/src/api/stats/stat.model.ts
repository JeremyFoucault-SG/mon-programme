import {Typegoose, prop} from 'typegoose';

export class StatModel extends Typegoose {
    @prop()
    createdAt: Date;
}
