import { startInMemoryDB } from './in-memory-db';
import { insertArticleData } from './article.fixture';
import { insertCoachingData } from './coaching.fixture';
import { ArticlesService } from '../src/api/articles/articles.service';
import { CoachingsService } from 'src/api/coachings/coachings.service';

async function bootstrap() {
  await startInMemoryDB();

  const app = await require('../src/main').bootstrap();

  const articlesService: ArticlesService = app.get('ArticlesService');
  insertArticleData(articlesService);

  const coachingsService: CoachingsService = app.get('CoachingsService');
  insertCoachingData(coachingsService);

}
bootstrap();
