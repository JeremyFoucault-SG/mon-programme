import { CategoryDTO } from '../categories/category.dto';
import { ApiModelProperty } from '@nestjs/swagger';
import { Allow } from 'class-validator';

export class CoachingDTO {

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
    public readonly categories: CategoryDTO[];
}
