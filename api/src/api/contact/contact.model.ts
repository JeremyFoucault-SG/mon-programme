import { Typegoose, prop } from 'typegoose';

export class ContactModel extends Typegoose {
  @prop()
  createdAt: Date;

  @prop({unique: true})
  email: string;
}
