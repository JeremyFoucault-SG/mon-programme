import { Allow } from 'class-validator';

import { ApiModelProperty } from '@nestjs/swagger';

export class WishDTO {

  @Allow()
  @ApiModelProperty()
  public readonly coaching: string;
}
