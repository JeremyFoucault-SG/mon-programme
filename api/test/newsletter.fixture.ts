import * as faker from 'faker/locale/fr';
import { NewsletterService } from '../src/api/newsletter/newsletter.service';
import { NewsletterDTO } from '../src/api/newsletter/newsletter.dto';

export async function insertNewsletterData(newsletterService: NewsletterService) {
  for (let i = 1; i <= 50; i++) {
    const newsletterDTO: NewsletterDTO = {
        title: faker.lorem.sentence(50),
        content: faker.lorem.sentences(500),
        categories: [],
    };
    for (let j = 0; j < 2; j++) {
      newsletterDTO.categories.push({ title: faker.lorem.word()});
    }
    await newsletterService.insert(newsletterDTO);
  }
}
