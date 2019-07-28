import {Typegoose, prop, Ref} from 'typegoose';
import { CoachingModel } from '../coachings/coaching.model';

export class FollowedCoachingModel extends Typegoose {
    @prop()
    createdAt: Date;

    @prop({ min: 0, max: 5})
    rating: number;

    @prop({ref: CoachingModel})
    coaching: Ref<CoachingModel>;
}
