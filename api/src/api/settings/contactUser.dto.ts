import { Allow } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class ContactUserDto {

    @Allow()
    @ApiModelProperty()
    public readonly firstname?: string;

    @Allow()
    @ApiModelProperty()
    public readonly lastname?: string;

    @Allow()
    @ApiModelProperty()
    public readonly email?: string;

    @Allow()
    @ApiModelProperty()
    public readonly address?: string;

    @Allow()
    @ApiModelProperty()
    public readonly city?: string;

    @Allow()
    @ApiModelProperty()
    public readonly cp?: string;

}
