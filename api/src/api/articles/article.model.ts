import {Typegoose, prop, arrayProp, Ref} from 'typegoose';
import { CategoryModel } from '../categories/category.model';

export class ArticleModel extends Typegoose {
    @prop()
    createdAt: Date;

    @prop()
    id: string;

    @prop()
    updatedAt: Date;

    @prop()
    title: string;

    @prop()
    content: string;

    @prop()
    author: string;

    @prop()
    photoUrl: string;

    @arrayProp({items: CategoryModel, _id: false})
    categories: Array<Ref<CategoryModel>>;
}
