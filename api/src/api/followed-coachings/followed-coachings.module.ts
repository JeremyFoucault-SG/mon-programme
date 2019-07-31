import { Module } from '@nestjs/common';
import { FollowedCoachingsController } from './followed-coachings.controller';
import { FollowedCoachingsService } from './followed-coachings.service';
import { UsersModule } from '../users/users.module';
import { FollowedCoachingModel } from './followed-coaching.model';
import { TypegooseModule } from 'nestjs-typegoose';
import { CoachingsModule } from '../coachings/coachings.module';

@Module({
  imports: [
    TypegooseModule.forFeature([FollowedCoachingModel]),
    UsersModule,
    CoachingsModule,
  ],
  controllers: [FollowedCoachingsController],
  providers: [FollowedCoachingsService],
})
export class FollowedCoachingsModule {}
