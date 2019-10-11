import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ArticlesModule } from './articles/articles.module';
import { CoachingsModule } from './coachings/coachings.module';
import { NewsletterModule } from './newsletter/newsletter.module';
import { CartsModule } from './carts/carts.module';
import { BodiesModule } from './bodies/bodies.module';
import { StatsModule } from './stats/stats.module';
import { BookmarksModule } from './bookmarks/bookmarks.module';
import { WishesModule } from './wishes/wishes.module';
import { SettingsModule } from './settings/settings.module';
import { CategoriesModule } from './categories/categories.module';
import { FollowedCoachingsModule } from './followed-coachings/followed-coachings.module';
import { CoversModule } from './covers/covers.module';
import { GoalsModule } from './goals/goals.module';
import { ContactModule } from './contact/contact.module';
import { UploadModule} from './uplaod/upload.module';

@Module({
  imports: [
    AuthModule,
    ArticlesModule,
    CoachingsModule,
    NewsletterModule,
    CartsModule,
    CoversModule,
    GoalsModule,
    BodiesModule,
    StatsModule,
    BookmarksModule,
    WishesModule,
    SettingsModule,
    CategoriesModule,
    FollowedCoachingsModule,
    ContactModule,
    UploadModule,
  ],
})
export class ApiModule { }
