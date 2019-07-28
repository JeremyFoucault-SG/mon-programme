import {Typegoose, prop, Ref} from 'typegoose';
import { UserModel } from '../users/user.model';

export class AuthModel extends Typegoose {
    @prop()
    createdAt: Date;

    @prop()
    updatedAt: Date;

    @prop()
    username: string;

    @prop()
    password: string;

    @prop({ref: UserModel})
    user: Ref<UserModel>;
}
