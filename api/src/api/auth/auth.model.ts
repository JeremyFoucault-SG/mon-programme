import { Typegoose, prop, Ref, instanceMethod, pre } from 'typegoose';
import { UserModel } from '../users/user.model';
import * as Bcrypt from 'bcryptjs';

@pre<AuthModel>('save', function(next) {
  if (!this.isModified('password')) {
    return next();
  }
  this.password = Bcrypt.hashSync(this.password, 10);
  next();
})
export class AuthModel extends Typegoose {
  @prop()
  createdAt: Date;

  @prop()
  updatedAt: Date;

  @prop()
  username: string;

  @prop()
  password: string;

  @prop({ ref: UserModel })
  user: Ref<UserModel>;

  @instanceMethod
  comparePassword(password) {
    return Bcrypt.compareSync(password, this.password);
  }
}
