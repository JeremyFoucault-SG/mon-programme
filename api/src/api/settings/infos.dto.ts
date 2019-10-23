import { Allow } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class InfosDTO {

    @Allow()
    @ApiModelProperty()
    public readonly age?: string;

    @Allow()
    @ApiModelProperty()
    public readonly weight?: string;

    @Allow()
    @ApiModelProperty()
    public readonly size?: string;

    @Allow()
    @ApiModelProperty()
    public readonly goals?: string;
}
