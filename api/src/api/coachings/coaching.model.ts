import { Typegoose, prop, arrayProp, pre } from 'typegoose';
import { CategoryModel } from '../categories/category.model';
import { SubDocument, SubDocumentArray } from '../../../@types/typegoose';

@pre<CoachingModel>('save', function(next) {
    if (this.title) {
        this.urlTitle = this.title.replace(/ /g, '-');
    }
    next();
})

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

    @prop()
    urlTitle: string;

    @arrayProp({ items: CategoryModel, _id: false })
    categories: SubDocumentArray<CategoryModel>;
}
