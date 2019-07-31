import * as faker from 'faker/locale/fr';
import { ArticlesService } from '../src/api/articles/articles.service';
import { ArticleDTO } from '../src/api/articles/article.dto';

export async function insertArticleData(articleService: ArticlesService) {
  // populate mongo
  for (let i = 1; i <= 50; i++) {
    const articleDTO: ArticleDTO = {
        title: faker.lorem.sentence(50),
        author: faker.name.firstName(),
        content: faker.lorem.sentences(500),
        categories: [],
    };
    for (let j = 0; j < 2; j++) {
      articleDTO.categories.push({ title: faker.lorem.word()});
    }
    await articleService.insert(articleDTO);
  }
}
