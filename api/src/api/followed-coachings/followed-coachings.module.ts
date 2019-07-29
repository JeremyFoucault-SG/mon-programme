import { Module } from '@nestjs/common';
import { FollowedCoachingsController } from './followed-coachings.controller';
import { FollowedCoachingsService } from './followed-coachings.service';

@Module({
  controllers: [FollowedCoachingsController],
  providers: [FollowedCoachingsService],
})
export class FollowedCoachingsModule {}
