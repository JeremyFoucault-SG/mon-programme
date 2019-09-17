import { InstanceType, ModelType } from 'typegoose';
import { Injectable } from '@nestjs/common';
import { SettingsModel } from './settings.model';
import { UsersService } from '../users/users.service';
import { SettingsDTO } from './settings.dto';
import { InjectModel } from 'nestjs-typegoose';

/**
 * Service for manage settings save in database, for a given user
 */
@Injectable()
export class SettingsService {

  constructor(
    private usersService: UsersService, @InjectModel(SettingsModel) private readonly settingsModel: ModelType<SettingsModel>,
  ) { }

  /**
   * Find settings for a given user ID
   * @param idUser ID of current user
   */
  async find(idUser: string): Promise<SettingsModel> {
    const user = await this.usersService.findById(idUser);
    return user.settings;
  }

  async insert(idUser: string, settings: SettingsDTO): Promise<SettingsModel> {
    const user = await this.usersService.findById(idUser);
    await user.updateOne({ 'settings.infos': settings.infos }).exec();
    return user.settings;
  }

  async findById(idSetting: string): Promise<SettingsModel> {
    const setting = await this.settingsModel.findById(idSetting);
    return setting;
  }

  async findAll(): Promise<SettingsModel[]> {
    return this.settingsModel.find({}).exec();
  }

}
