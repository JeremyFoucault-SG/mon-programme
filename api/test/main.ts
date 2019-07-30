import { startInMemoryDB } from './in-memory-db';
import { insertArticleData } from './article.fixture';
import { insertCoachingData } from './coaching.fixture';
import { insertCoverData } from './cover.fixture';
import { ArticlesService } from '../src/api/articles/articles.service';
import { CategoriesService } from '../src/api/categories/categories.service';
import { insertCategoryData } from './category.fixture';
import { CoachingsService } from 'src/api/coachings/coachings.service';
import { CoversService } from 'src/api/covers/covers.service';
import { GoalsService } from '../src/api/goals/goals.service';
import { insertGoalData } from './goal.fixture';

async function bootstrap() {
  await startInMemoryDB();

  const app = await require('../src/main').bootstrap();

  const articlesService: ArticlesService = app.get('ArticlesService');
  insertArticleData(articlesService);

  const goalsService: GoalsService = app.get('GoalsService');
  insertGoalData(goalsService);

  const categoriesService: CategoriesService = app.get('CategoriesService');
  insertCategoryData(categoriesService);
  const coachingsService: CoachingsService = app.get('CoachingsService');
  insertCoachingData(coachingsService);

  const coversService: CoversService = app.get('CoversService');
  insertCoverData(coversService);

}
bootstrap();
