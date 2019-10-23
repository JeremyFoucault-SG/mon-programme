import { Module } from '@nestjs/common';
import { WishesController } from './wishes.controller';
import { WishesService } from './wishes.service';
import { UsersModule } from '../users/users.module';
import { WishModel } from './wish.model';
import { TypegooseModule } from 'nestjs-typegoose';
import { CoachingsModule } from '../coachings/coachings.module';
import { AuthModule } from '../auth/auth.module';
import { ArticlesModule } from '../articles/articles.module';

@Module({
  imports: [
    TypegooseModule.forFeature(
      [{
        typegooseClass: WishModel,
        schemaOptions: {
          collection: 'wishes',
        },
      }]),
    AuthModule,
    UsersModule,
    CoachingsModule,
    ArticlesModule,
  ],
  controllers: [WishesController],
  providers: [WishesService],
})
export class WishesModule { }
