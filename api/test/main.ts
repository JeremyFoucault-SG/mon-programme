import { startInMemoryDB } from './in-memory-db';
import { insertData } from './article.fixture';
import { ArticlesService } from '../src/api/articles/articles.service';

async function bootstrap() {
  await startInMemoryDB();

  const app = await require('../src/main').bootstrap();

  const articlesService: ArticlesService = app.get('ArticlesService');
  insertData(articlesService);
}
bootstrap();
