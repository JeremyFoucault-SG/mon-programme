import { Typegoose, prop } from 'typegoose';

export class ContactUserModel {
    @prop()
    firstname?: string;

    @prop()
    lastname?: string;

    @prop()
    email?: string;

    @prop()
    address?: string;

    @prop()
    city?: string;

    @prop()
    cp?: string;

}
