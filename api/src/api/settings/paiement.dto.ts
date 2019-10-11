import { Allow } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class PaiementDto {

    @Allow()
    @ApiModelProperty()
    public readonly rib?: string;

    @Allow()
    @ApiModelProperty()
    public readonly iban?: string;

}
