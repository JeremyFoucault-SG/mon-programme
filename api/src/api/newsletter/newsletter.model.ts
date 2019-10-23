import {Typegoose, prop, arrayProp} from 'typegoose';

export class NewsletterModel extends Typegoose {
    @prop({unique: true })
    email: string;
}
