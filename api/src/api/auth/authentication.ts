import { Document } from 'mongoose';

export interface Authentication extends Document {
  readonly password: string;
  readonly username: string;
}
