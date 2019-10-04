import * as faker from 'faker/locale/fr';
import { CoachingsService } from '../src/api/coachings/coachings.service';
import { CoachingDTO } from '../src/api/coachings/coaching.dto';
import { CategoriesService } from 'src/api/categories/categories.service';

export async function insertCoachingData(coachingService: CoachingsService, categoryService: CategoriesService) {

  // populate mongo
  const categories = await categoryService.findAll();

  for (let i = 1; i <= 50; i++) {
    const coachingDTO: CoachingDTO = {
      title: faker.lorem.sentence(2),
      content: faker.lorem.sentences(10),
      rating: faker.random.number(5),
      categories: [categories[faker.random.number({ min: 0, max: categories.length - 1 })]],
      imageUrl: faker.image.nightlife(),
      level: faker.lorem.sentence(2),
      price: faker.random.number(2),
    };
    await coachingService.insert(coachingDTO);
  }
}
