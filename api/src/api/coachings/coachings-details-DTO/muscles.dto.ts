import { ApiModelProperty } from '@nestjs/swagger';
import { Allow, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { DetailsDTO } from './details.dto';

export class MusclesDTO {
  @Allow()
  @ApiModelProperty()
  public readonly type: string;

  @Allow()
  @ValidateNested({ each: true })
  @Type(() => DetailsDTO)
  @ApiModelProperty()
  public readonly detail: DetailsDTO[];
}
