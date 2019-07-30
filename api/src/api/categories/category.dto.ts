import { ApiModelProperty } from '@nestjs/swagger';
import { Allow } from 'class-validator';

export class CategoryDTO {
  @Allow()
  @ApiModelProperty()
  public readonly title: string;
}
