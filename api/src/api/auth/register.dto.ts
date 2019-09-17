import { Allow } from 'class-validator';

import { ApiModelProperty } from '@nestjs/swagger';

export class RegisterDTO {
    @Allow()
    @ApiModelProperty()
    age: string;
    @Allow()
    @ApiModelProperty()
    email: string;
    @Allow()
    @ApiModelProperty()
    firstname: string;
    @Allow()
    @ApiModelProperty()
    lastname: string;
    @Allow()
    @ApiModelProperty()
    objectif: string;
    @Allow()
    @ApiModelProperty()
    password: string;
    @Allow()
    @ApiModelProperty()
    size: string;
    @Allow()
    @ApiModelProperty()
    username: string;
    @Allow()
    @ApiModelProperty()
    weight: string;
}
