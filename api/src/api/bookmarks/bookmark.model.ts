import {Typegoose, prop, Ref} from 'typegoose';
import { ArticleModel } from '../articles/article.model';

export class BookmarkModel extends Typegoose {
    @prop()
    createdAt: Date;

    @prop({ref: ArticleModel})
    article: Ref<ArticleModel>;
}
