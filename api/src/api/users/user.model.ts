import {Typegoose, prop, arrayProp} from 'typegoose';
import { Body } from '@nestjs/common';
import { Types } from 'mongoose';
import { StatModel } from '../stats/stat.model';
import { FollowedCoachingModel } from '../followed-coachings/followed-coaching.model';
import { CartModel } from '../carts/cart.model';
import { BookmarkModel } from '../bookmarks/bookmark.model';
import { WishModel } from '../wishes/wish.model';
import { SettingsModel } from '../settings/settings.model';

export class UserModel extends Typegoose {
    @prop()
    id: Types.ObjectId;

    @prop()
    createdAt: Date;

    @arrayProp({items: Body})
    bodies: Body[];

    @arrayProp({items: StatModel})
    stat: StatModel[];

    @arrayProp({items: FollowedCoachingModel})
    followedCoachings: FollowedCoachingModel[];

    @arrayProp({items: CartModel})
    carts: CartModel[];

    @arrayProp({items: BookmarkModel})
    bookmarks: BookmarkModel[];

    @arrayProp({items: WishModel})
    wishes: WishModel[];

    @prop({_id: false})
    settings: SettingsModel;
}
