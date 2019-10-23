import { Allow, ValidateNested } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
import { InfosDTO } from './infos.dto';
import { Type } from 'class-transformer';
import { ContactUserDto } from './contactUser.dto';
import { PaiementDto } from './paiement.dto';
import { InfosModel } from './infos.model';

export class SettingsDTO {

    @Allow()
    @ApiModelProperty()
    public readonly infos: InfosDTO;

    @Allow()
    @ApiModelProperty()
    public readonly contact: ContactUserDto;

    @Allow()
    @ApiModelProperty()
    public readonly paiement: PaiementDto;
}
