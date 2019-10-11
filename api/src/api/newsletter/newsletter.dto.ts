import { ApiModelProperty } from '@nestjs/swagger';
import { Allow } from 'class-validator';

export class NewsletterDTO {

    @Allow()
    @ApiModelProperty()
    public readonly email: string;
}
