import {Typegoose, prop} from 'typegoose';

export class SettingsModel extends Typegoose {
    @prop()
    createdAt: Date;
}
