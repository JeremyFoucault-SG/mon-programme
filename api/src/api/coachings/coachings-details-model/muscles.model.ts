import { Typegoose, prop, arrayProp, pre } from 'typegoose';
import { DetailModel } from './details.model';

export class MusclesModel {
    @prop()
    type: string;

    @prop()
    detail: DetailModel[];
}