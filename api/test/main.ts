import { startInMemoryDB } from './in-memory-db';
import { insertArticleData } from './article.fixture';
import { insertCoachingData } from './coaching.fixture';
import { insertCoverData } from './cover.fixture';
import { ArticlesService } from '../src/api/articles/articles.service';
import { CategoriesService } from '../src/api/categories/categories.service';
import { insertCategoryData } from './category.fixture';
import { insertNewsletterData } from './newsletter.fixture';
import { CoachingsService } from '../src/api/coachings/coachings.service';
import { CoversService } from '../src/api/covers/covers.service';
import { NewsletterService } from '../src/api/newsletter/newsletter.service';
import { GoalsService } from '../src/api/goals/goals.service';
import { insertGoalData } from './goal.fixture';
import { UsersService } from '../src/api/users/users.service';
import { insertUserData } from './user.fixture';
import { AuthController } from '../src/api/auth/auth.controller';
import { insertAuthData } from './auth.fixture';
import { FollowedCoachingsService } from 'src/api/followed-coachings/followed-coachings.service';
// import { insertSettingData } from './setting.fixture';

async function bootstrap() {
  await startInMemoryDB();

  const app = await require('../src/main').bootstrap();

  const categoriesService: CategoriesService = app.get('CategoriesService');
  await insertCategoryData(categoriesService);

  const authController: AuthController = app.get('AuthController');
  await insertAuthData(authController);

  const articlesService: ArticlesService = app.get('ArticlesService');
  await insertArticleData(articlesService, categoriesService);

  const goalsService: GoalsService = app.get('GoalsService');
  await insertGoalData(goalsService);

  const coachingsService: CoachingsService = app.get('CoachingsService');
  await insertCoachingData(coachingsService, categoriesService);

  const coversService: CoversService = app.get('CoversService');
  await insertCoverData(coversService);

  const usersService: UsersService = app.get('UsersService');
  const followedCoachingsService: FollowedCoachingsService = app.get('FollowedCoachingsService');
  await insertUserData(articlesService, coachingsService, followedCoachingsService, usersService);

  // const newsletterService: NewsletterService = app.get('NewsletterService');
  // insertNewsletterData(newsletterService);

}
bootstrap();
