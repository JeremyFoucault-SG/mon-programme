import * as faker from 'faker/locale/fr';
import { CoversService } from '../src/api/covers/covers.service';
import { CoverDTO } from '../src/api/covers/cover.dto';

export async function insertCoverData(coverService: CoversService) {
  for (let i = 1; i <= 50; i++) {
    const coverDTO: CoverDTO = {
        title: faker.lorem.sentence(50),
        content: faker.lorem.sentences(500),
        urlImage: faker.lorem.sentence(50),
        categories: [],
    };
    for (let j = 0; j < 2; j++) {
      coverDTO.categories.push({ title: faker.lorem.word()});
    }
    await coverService.insert(coverDTO);
  }
}
