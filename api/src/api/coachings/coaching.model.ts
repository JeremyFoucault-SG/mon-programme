import {Typegoose, prop, arrayProp} from 'typegoose';
import { CategoryModel } from '../categories/category.model';

export class CoachingModel extends Typegoose {
    @prop()
    createdAt: Date;

    @prop()
    updatedAt: Date;

    @prop({min: 0, max: 5})
    rating: number;
    
    @prop()
    title: string;

    @prop()
    content: string;

    @arrayProp({items: CategoryModel, _id: false})
    categories: CategoryModel[];
}
