import { Typegoose, prop } from 'typegoose';

export class InfosModel {
    @prop()
    createdAt?: Date;

    @prop()
    age?: string;

    @prop()
    weight?: string;

    @prop()
    size?: string;

    @prop()
    goals?: string;

}