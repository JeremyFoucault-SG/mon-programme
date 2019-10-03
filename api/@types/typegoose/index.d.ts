import { Types } from "mongoose";
import { InstanceType, Typegoose } from "typegoose";

export type SubDocument<T extends Typegoose> = InstanceType<T> & Types.Subdocument;
export type SubDocumentArray<T extends Typegoose> = Types.DocumentArray<SubDocument<T>>;
