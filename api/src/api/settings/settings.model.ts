import { Typegoose, prop } from 'typegoose';
import { InfosDTO } from './infos.dto';
import { ContactUserDto } from './contactUser.dto';
import { PaiementDto } from './paiement.dto';
import { InfosModel } from './infos.model';

export class SettingsModel extends Typegoose {
    @prop()
    createdAt?: Date;

    @prop()
    infos: InfosModel;

    @prop()
    contact: ContactUserDto;

    @prop()
    paiement: PaiementDto;

}
