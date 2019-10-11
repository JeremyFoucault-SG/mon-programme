import { User } from '../../../../shared/models/user.model';

export class GetUserById {
    static readonly type = '[Blog] Get user by Id';
    constructor(public id: string) { }
}
