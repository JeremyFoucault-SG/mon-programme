import { CategoryDTO } from '../categories/category.dto';
import { ApiModelProperty } from '@nestjs/swagger';
import { Allow } from 'class-validator';

export class NewsletterDTO {

    @Allow()
    @ApiModelProperty()
    public readonly email: string;
}
