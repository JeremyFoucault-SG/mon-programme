import { Typegoose, prop, arrayProp } from 'typegoose';
import { CategoryModel } from '../categories/category.model';
import { SubDocument, SubDocumentArray } from '../../../@types/typegoose';

export class CoachingModel extends Typegoose {
    @prop()
    id: string;

    @prop()
    createdAt: Date;

    @prop()
    updatedAt: Date;

    @prop({ min: 0, max: 5 })
    rating: number;

    @prop()
    title: string;

    @prop()
    content: string;

    @prop()
    imageUrl: string;

    @prop()
    level: string;

    @prop()
    price: number;

    @arrayProp({ items: CategoryModel, _id: false })
    categories: SubDocumentArray<CategoryModel>;
}
