import {Typegoose, prop, Ref} from 'typegoose';
import { CoachingModel } from '../coachings/coaching.model';

export class WishModel extends Typegoose {
    @prop()
    createdAt: Date;

    @prop({ref: CoachingModel})
    coaching: Ref<CoachingModel>;
}
