import {Typegoose, prop, Ref} from 'typegoose';
import { CoachingModel } from '../coachings/coaching.model';
import { ArticleModel } from '../articles/article.model';

export class WishModel extends Typegoose {
    @prop()
    createdAt: Date;

    @prop({ref: CoachingModel})
    coaching: Ref<CoachingModel>;

    @prop({ref: ArticleModel})
    article: Ref<ArticleModel>;

    @prop()
    wishId: string;

    @prop()
    id: string;

}
