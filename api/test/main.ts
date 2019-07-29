import { startInMemoryDB } from './in-memory-db';
import { insertArticleData } from './article.fixture';
import { ArticlesService } from '../src/api/articles/articles.service';
import { CategoriesService } from '../src/api/categories/categories.service';
import { insertCategoryData } from './category.fixture';

async function bootstrap() {
  await startInMemoryDB();

  const app = await require('../src/main').bootstrap();

  const articlesService: ArticlesService = app.get('ArticlesService');
  insertArticleData(articlesService);

  const categoriesService: CategoriesService = app.get('CategoriesService');
  insertCategoryData(categoriesService);
}
bootstrap();
