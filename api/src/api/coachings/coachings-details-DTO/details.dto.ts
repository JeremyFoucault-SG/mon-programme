import { ApiModelProperty } from '@nestjs/swagger';
import { Allow, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class DetailsDTO {
    @Allow()
    @ApiModelProperty()
    public readonly index: number;

    @Allow()
    @ApiModelProperty()
    public readonly exercise: string;

    @Allow()
    @ApiModelProperty()
    public readonly series: number;

    @Allow()
    @ApiModelProperty()
    public readonly reps: number;


}