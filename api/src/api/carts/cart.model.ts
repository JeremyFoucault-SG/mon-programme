import {Typegoose, prop, Ref, arrayProp} from 'typegoose';
import { CoachingModel } from '../coachings/coaching.model';

export class CartModel extends Typegoose {
    @prop()
    createdAt: Date;

    @arrayProp({items: CoachingModel})
    coaching: CoachingModel;
}
