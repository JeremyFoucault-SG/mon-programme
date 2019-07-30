import { Allow, ValidateNested } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
import { CoachingDTO } from '../coachings/coaching.dto';
import { FollowedCoachingDTO } from '../followed-coachings/followed-coachings.dto';
import { Type } from 'class-transformer';

export class CartDTO {
  @Allow()
  @Type(() => CoachingDTO)
  @ValidateNested({each: true})
  @ApiModelProperty()
  public readonly coaching: CoachingDTO[];
}
