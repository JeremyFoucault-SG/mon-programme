import {Typegoose, prop, arrayProp} from 'typegoose';

export class CoverModel extends Typegoose {
    @prop()
    createdAt: Date;

    @prop()
    updatedAt: Date;
}
