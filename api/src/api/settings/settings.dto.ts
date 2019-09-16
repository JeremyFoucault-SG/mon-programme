import { Allow, ValidateNested } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
import { InfosDTO } from './infos.dto';
import { Type } from 'class-transformer';

export class SettingsDTO {

    @Allow()
    @ApiModelProperty()
    public readonly infos: InfosDTO;
}
