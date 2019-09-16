import * as faker from 'faker/locale/fr';
import { SettingsService } from '../src/api/settings/settings.service';
import { SettingsDTO } from '../src/api/settings/settings.dto';

export async function insertSettingData(settingsService: SettingsService) {
    // populate mongo
    for (let i = 1; i <= 50; i++) {
        const settingsDTO: SettingsDTO = {
            infos: {
                firstname: faker.name.firstName(50),
                lastname: faker.name.firstName(50),
                age: faker.name.firstName(50),
                email: faker.name.firstName(50),
                username: faker.name.firstName(50),
                objectif: faker.name.firstName(50),
                weight: faker.name.firstName(50),
                size: faker.name.firstName(50),

            },
        };
        await settingsService.insert(settingsDTO);
    }
}
