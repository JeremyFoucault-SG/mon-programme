import * as faker from 'faker/locale/fr';
import { ArticlesService } from '../src/api/articles/articles.service';
import { ArticleDTO } from '../src/api/articles/article.dto';
import { CategoriesService } from 'src/api/categories/categories.service';

export async function insertArticleData(articleService: ArticlesService, categoryService: CategoriesService) {
  // populate mongo
  const categories = await categoryService.findAll();

  for (let i = 1; i <= 50; i++) {
    const articleDTO: ArticleDTO = {
        title: faker.lorem.sentence(50),
        author: faker.name.firstName(),
        content: faker.lorem.sentences(500),
        categories: [categories[faker.random.number({min: 0, max: categories.length -1})]],
    };

    await articleService.insert(articleDTO);
  }
}
