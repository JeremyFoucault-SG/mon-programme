import { CategoryDTO } from '../categories/category.dto';
import { ApiModelProperty } from '@nestjs/swagger';
import { Allow, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CoachingDTO {
  @Allow()
  @ApiModelProperty()
  public readonly id?: string;

  @Allow()
  @ApiModelProperty()
  public readonly title: string;

  @Allow()
  @ApiModelProperty()
  public readonly content: string;

  @Allow()
  @ApiModelProperty()
  public readonly rating: number;

  @Allow()
  @ApiModelProperty()
  public readonly imageUrl: string;

  @Allow()
  @ApiModelProperty()
  public readonly level: string;

  @Allow()
  @Type(() => CategoryDTO)
  @ValidateNested({each: true})
  @ApiModelProperty()
  public readonly categories: CategoryDTO[];
}
