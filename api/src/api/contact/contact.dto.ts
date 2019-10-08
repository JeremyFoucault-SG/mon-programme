import { Allow } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class ContactDTO {
    @Allow()
    @ApiModelProperty()
    name: string;
    @Allow()
    @ApiModelProperty()
    email: string;
    @Allow()
    @ApiModelProperty()
    phone: string;
    @Allow()
    @ApiModelProperty()
    topic: string;
    @Allow()
    @ApiModelProperty()
    message: string;
}
