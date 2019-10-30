import { Allow, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiModelProperty } from '@nestjs/swagger';
import { SettingsDTO } from '../settings/settings.dto';
import { WishDTO } from '../wishes/wish.dto';
import { BookmarkDTO } from '../bookmarks/bookmark.dto';
import { CartDTO } from '../carts/cart.dto';
import { StatDTO } from '../stats/stat.dto';
import { BodyDTO } from '../bodies/body.dto';
import { FollowedCoachingDTO } from '../followed-coachings/followed-coachings.dto';
import { CoachingDTO } from '../coachings/coaching.dto';

export class UserDTO {
  @Allow()
  @ApiModelProperty()
  public readonly id?: string;

  @Allow()
  @ValidateNested({ each: true })
  @Type(() => BodyDTO)
  @ApiModelProperty()
  public readonly bodies?: BodyDTO[];

  @Allow()
  @ValidateNested({ each: true })
  @Type(() => StatDTO)
  @ApiModelProperty()
  public readonly stats?: StatDTO[];

  @Allow()
  @ValidateNested({ each: true })
  @Type(() => FollowedCoachingDTO)
  @ApiModelProperty()
  public readonly myCoachings?: FollowedCoachingDTO[];

  @Allow()
  @ValidateNested({ each: true })
  @Type(() => CartDTO)
  @ApiModelProperty()
  public readonly carts?: CartDTO[];

  @Allow()
  @ValidateNested({ each: true })
  @Type(() => BookmarkDTO)
  @ApiModelProperty()
  public readonly bookmarks?: BookmarkDTO[];

  @Allow()
  @ValidateNested({ each: true })
  @Type(() => WishDTO)
  @ApiModelProperty()
  public readonly wishes?: WishDTO[];

  @Allow()
  @ValidateNested()
  @Type(() => SettingsDTO)
  @ApiModelProperty()
  public readonly settings?: SettingsDTO;

}
