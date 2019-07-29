import { ApiModelProperty } from '@nestjs/swagger';
import { Allow } from 'class-validator';
import { CategoryDTO } from '../categories/category.dto';

export class CoverDTO {

    @Allow()
    @ApiModelProperty()
    public readonly title: string;

    @Allow()
    @ApiModelProperty()
    public readonly content: string;

    @Allow()
    @ApiModelProperty()
    public readonly urlImage: string;

    @Allow()
    @ApiModelProperty()
    public readonly categories: CategoryDTO[];

}
