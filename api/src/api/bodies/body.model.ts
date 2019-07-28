import {Typegoose, prop } from 'typegoose';

export class BodyModel extends Typegoose {
    @prop()
    createdAt: Date;
}
