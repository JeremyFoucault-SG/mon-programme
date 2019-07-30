import { Module } from '@nestjs/common';
import { WishesController } from './wishes.controller';
import { WishesService } from './wishes.service';
import { UsersModule } from '../users/users.module';
import { WishModel } from './wish.model';
import { TypegooseModule } from 'nestjs-typegoose';
import { CoachingsModule } from '../coachings/coachings.module';

@Module({
  imports: [
    TypegooseModule.forFeature([WishModel]),
    UsersModule,
    CoachingsModule,
  ],
  controllers: [WishesController],
  providers: [WishesService],
})
export class WishesModule {}
