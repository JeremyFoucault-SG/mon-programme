import { ArticleDTO } from '../articles/article.dto';
import { ValidateNested } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class BookmarkDTO {
  @ValidateNested()
  @Type(() => ArticleDTO)
  @ApiModelProperty()
  public readonly article: ArticleDTO;
}
