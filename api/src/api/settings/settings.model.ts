import { Typegoose, prop } from 'typegoose';
import { InfosDTO } from './infos.dto';

export class SettingsModel extends Typegoose {
    @prop()
    createdAt: Date;

    @prop()
    infos: InfosDTO;

}
