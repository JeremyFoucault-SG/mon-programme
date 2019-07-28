import {Typegoose, prop} from 'typegoose';

export class NewsletterModel extends Typegoose {
    @prop()
    createdAt: Date;
}
