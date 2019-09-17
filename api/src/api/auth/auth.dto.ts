import { Allow } from 'class-validator';

import { ApiModelProperty } from '@nestjs/swagger';

export class AuthDTO {
    @Allow()
    @ApiModelProperty()
    public readonly username: string;
    @Allow()
    @ApiModelProperty()
    public readonly password: string;
}
