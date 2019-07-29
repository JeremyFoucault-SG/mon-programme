import * as faker from 'faker/locale/fr';
import { CoachingsService } from '../src/api/coachings/coachings.service';
import { CoachingDTO } from '../src/api/coachings/coaching.dto';

export async function insertCoachingData(coachingService: CoachingsService) {
  for (let i = 1; i <= 50; i++) {
    const coachingDTO: CoachingDTO = {
        title: faker.lorem.sentence(50),
        content: faker.lorem.sentences(500),
        rating: faker.random.number(5),
        categories: [],
    };
    for (let j = 0; j < 2; j++) {
      coachingDTO.categories.push({ title: faker.lorem.word()});
    }
    await coachingService.insert(coachingDTO);
  }
}
