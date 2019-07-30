import {Typegoose, prop, Ref, arrayProp} from 'typegoose';
import { CoachingModel } from '../coachings/coaching.model';
import { SubDocumentArray } from '../../../@types/typegoose';

export class CartModel extends Typegoose {
    @prop()
    createdAt: Date;

    @arrayProp({items: CoachingModel})
    coachings: SubDocumentArray<CoachingModel>;
}
