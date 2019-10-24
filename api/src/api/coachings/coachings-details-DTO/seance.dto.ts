import { ApiModelProperty } from '@nestjs/swagger';
import { Allow, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { MusclesDTO } from './muscles.dto';

export class SeanceDTO {
    @Allow()
    @ApiModelProperty()
    public readonly index: number;

    @Allow()
    @ApiModelProperty()
    public readonly repTime: number;

    @Allow()
    @ValidateNested({ each: true })
    @Type(() => MusclesDTO)
    @ApiModelProperty()
    public readonly muscles: MusclesDTO[];
}