import { startInMemoryDB } from './in-memory-db';
import { insertArticleData } from './article.fixture';
import { ArticlesService } from '../src/api/articles/articles.service';

async function bootstrap() {
  await startInMemoryDB();

  const app = await require('../src/main').bootstrap();

  const articlesService: ArticlesService = app.get('ArticlesService');
  insertArticleData(articlesService);
}
bootstrap();
