import {Typegoose, prop, arrayProp} from 'typegoose';
import { CategoryModel } from '../categories/category.model';

export class NewsletterModel extends Typegoose {
    @prop()
    createdAt: Date;
    @prop()
    title: string;

    @prop()
    content: string;

    @arrayProp({ items: CategoryModel, _id: false })
    categories: CategoryModel[];
}
