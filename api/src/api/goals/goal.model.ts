import {Typegoose, prop } from 'typegoose';

export class GoalModel extends Typegoose {
    @prop()
    createdAt: Date;

    @prop()
    updatedAt: Date;
}
