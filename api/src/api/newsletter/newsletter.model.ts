import {Typegoose, prop, arrayProp} from 'typegoose';
import { CategoryModel } from '../categories/category.model';

export class NewsletterModel extends Typegoose {
    @prop({unique: true })
    email: string;
}
