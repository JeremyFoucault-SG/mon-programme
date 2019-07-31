import { InstanceType } from 'typegoose';
import { Injectable } from '@nestjs/common';
import { SettingsModel } from './settings.model';
import { UsersService } from '../users/users.service';

/**
 * Service for manage settings save in database, for a given user
 */
@Injectable()
export class SettingsService {

  constructor(
    private usersService: UsersService,
  ) { }

  /**
   * Find settings for a given user ID
   * @param idUser ID of current user
   */
  async find(idUser: string): Promise<SettingsModel> {
    const user = await this.usersService.findById(idUser);
    return user.settings;
  }

}
