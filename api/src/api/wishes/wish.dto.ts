import { Allow } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
import { CoachingDTO } from '../coachings/coaching.dto';
import { ArticleModel } from '../articles/article.model';

export class WishDTO {

  @Allow()
  @ApiModelProperty()
  public readonly id?: string;

  @Allow()
  @ApiModelProperty()
  public readonly wishId?: string;

}
