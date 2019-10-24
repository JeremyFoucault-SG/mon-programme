import { Typegoose, prop, arrayProp, pre } from 'typegoose';

export class DetailModel {
    @prop()
    index: number;

    @prop()
    exercise: string;

    @prop()
    series: number;

    @prop()
    reps: number;
}
