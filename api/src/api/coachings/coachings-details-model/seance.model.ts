import { Typegoose, prop, arrayProp, pre } from 'typegoose';
import { MusclesModel } from './muscles.model';

export class SeanceModel extends Typegoose {
    @prop()
    index: number;

    @prop()
    repTime: number;

    @prop()
    muscles: MusclesModel[];
}
