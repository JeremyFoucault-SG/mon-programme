import { InstanceType, ModelType } from 'typegoose';
import { Injectable } from '@nestjs/common';
import { SettingsModel } from './settings.model';
import { UsersService } from '../users/users.service';
import { SettingsDTO } from './settings.dto';
import { InjectModel } from 'nestjs-typegoose';
import { UserModel } from '../users/user.model';

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
    await user.updateOne({ 'settings.contact': settings.contact }).exec();
    await user.updateOne({ 'settings.paiement': settings.paiement }).exec();
    return user.settings;
  }

  async update(id: string, settings: SettingsDTO): Promise<SettingsModel> {
    const user = await this.usersService.findById(id);
    user.set('settings', settings);
    await user.save();
    return user.settings;
  }

  async findAll(): Promise<SettingsModel[]> {
    return this.settingsModel.find({}).exec();
  }

}
