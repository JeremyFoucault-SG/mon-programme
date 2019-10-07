import { Allow, ValidateNested } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
import { CoachingDTO } from '../coachings/coaching.dto';
import { FollowedCoachingDTO } from '../followed-coachings/followed-coachings.dto';
import { Type } from 'class-transformer';

export class CartDTO {

  @Allow()
  @ApiModelProperty()
  public readonly id?: string;

  @Allow()
  @ApiModelProperty()
  public readonly cartId?: string;

  // @Allow()
  // @Type(() => CoachingDTO)
  // @ValidateNested({each: true})
  // @ApiModelProperty()
  // public readonly coachings: CoachingDTO[];
}
