import { Allow } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
import { CoachingModel } from '../coachings/coaching.model';

export class FollowedCoachingDTO {
  @Allow()
  @ApiModelProperty()
  public readonly rating: number;

  @Allow()
  @ApiModelProperty()
  public readonly coaching: CoachingModel;
}
