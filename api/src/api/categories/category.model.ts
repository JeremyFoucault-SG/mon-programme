import {Typegoose, prop} from 'typegoose';

export class CategoryModel extends Typegoose {
    @prop()
    createdAt: Date;

    @prop()
    updatedAt: Date;

    @prop()
    title: string;
}
