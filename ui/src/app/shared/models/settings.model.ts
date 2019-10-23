import { InfoUser } from './infoUser.model';
import { ContactUser } from './contactUser.model';
import { PaiementUser } from './paiementUser.model';

export class Settings {
  constructor(
    // tslint:disable-next-line: variable-name
    public _id?: string,
    public infos?: InfoUser,
    public contact?: ContactUser,
    public paiement?: PaiementUser
  ) {}
}
