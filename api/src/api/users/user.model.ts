import {Typegoose, prop, arrayProp} from 'typegoose';
import { Types } from 'mongoose';
import { Body } from '@nestjs/common';
import { StatModel } from '../stats/stat.model';
import { FollowedCoachingModel } from '../followed-coachings/followed-coaching.model';
import { CartModel } from '../carts/cart.model';
import { BookmarkModel } from '../bookmarks/bookmark.model';
import { WishModel } from '../wishes/wish.model';
import { SettingsModel } from '../settings/settings.model';
import { BodyModel } from '../bodies/body.model';
import { SubDocument, SubDocumentArray } from '../../../@types/typegoose';
import { CoachingModel } from '../coachings/coaching.model';

export class UserModel extends Typegoose {

    @prop()
    id: Types.ObjectId;

    @prop()
    createdAt: Date;

    @arrayProp({items: Body})
    bodies: SubDocumentArray<BodyModel>;

    @arrayProp({items: StatModel})
    stats: SubDocumentArray<StatModel>;

    @arrayProp({items: FollowedCoachingModel})
    followedCoachings: SubDocumentArray<FollowedCoachingModel>;

    @arrayProp({items: CartModel})
    carts: SubDocumentArray<CartModel>;

    @arrayProp({items: BookmarkModel})
    bookmarks: SubDocumentArray<BookmarkModel>;

    @arrayProp({items: WishModel})
    wishes: SubDocumentArray<WishModel>;

    @prop({_id: false})
    settings: SettingsModel;
}
