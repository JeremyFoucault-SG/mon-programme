import { CategoryDTO } from '../categories/category.dto';
import { ApiModelProperty } from '@nestjs/swagger';
import { Allow, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class ArticleDTO {

  @Allow()
  @ApiModelProperty()
  public readonly title: string;

  @Allow()
  @ApiModelProperty()
  public readonly content: string;

  @Allow()
  @ApiModelProperty()
  public readonly author: string;

  @Allow()
  @ValidateNested({each: true})
  @Type(() => CategoryDTO)
  @ApiModelProperty()
  public readonly categories: CategoryDTO[];
}
