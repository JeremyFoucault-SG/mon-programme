import {Typegoose, prop, arrayProp} from 'typegoose';
import { CategoryModel } from '../categories/category.model';

export class CoverModel extends Typegoose {
    @prop()
    createdAt: Date;

    @prop()
    updatedAt: Date;

    @prop()
    title: string;

    @prop()
    content: string;

    @prop()
    urlImage: string;

    @arrayProp({ items: CategoryModel, _id: false })
    categories: CategoryModel[];

}
