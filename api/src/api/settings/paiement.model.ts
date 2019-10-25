import { Typegoose, prop } from 'typegoose';

export class PaiementModel {
    @prop()
    rib?: string;

    @prop()
    iban?: string;
}
