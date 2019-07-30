import { Allow } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class FollowedCoachingDTO {
  @Allow()
  @ApiModelProperty()
  public readonly rating: number;

  @Allow()
  @ApiModelProperty()
  public readonly coaching: string;
}
