import * as faker from 'faker/locale/fr';
import { UsersService } from '../src/api/users/users.service';
import { UserDTO } from '../src/api/users/user.dto';
import { BodyDTO } from '../src/api/bodies/body.dto';
import { StatDTO } from '../src/api/stats/stat.dto';
import { FollowedCoachingDTO } from '../src/api/followed-coachings/followed-coachings.dto';
import { CartDTO } from '../src/api/carts/cart.dto';
import { BookmarkDTO } from '../src/api/bookmarks/bookmark.dto';
import { WishDTO } from '../src/api/wishes/wish.dto';
import { SettingsDTO } from '../src/api/settings/settings.dto';
import { ArticlesService } from '../src/api/articles/articles.service';
import { CoachingsService } from '../src/api/coachings/coachings.service';

export async function insertUserData(articlesService: ArticlesService, coachingsService: CoachingsService, usersService: UsersService) {
  // populate mongo

  // Get inserted data for populate user
  const coachings = await coachingsService.findAll();
  const articles = await articlesService.findAll();

  for (let k = 0; k <= 50; k++) {

    // BODY
    const bodies: BodyDTO[] = [];
    for (let i = 0; i <= faker.random.number({ min: 0, max: 5 }); i++) {
      const body: BodyDTO = {};
      bodies.push(body);
    }

    // STATS
    const stats: StatDTO[] = [];
    for (let i = 0; i <= faker.random.number({ min: 0, max: 5 }); i++) {
      const stat: StatDTO = {};
      stats.push(stat);
    }

    // FOLLOWED COACHING
    const followedCoachings: FollowedCoachingDTO[] = [];
    for (let i = 0; i <= faker.random.number({ min: 0, max: 5 }); i++) {
      const followedCoaching: FollowedCoachingDTO = {
        rating: faker.random.number({ min: 0, max: 5 }),
        coaching: coachings[faker.random.number({ min: 0, max: coachings.length - 1 })].id,
      };
      followedCoachings.push(followedCoaching);
    }

    // CARTS
    const carts: CartDTO[] = [];
    for (let i = 0; i <= faker.random.number({ min: 0, max: 5 }); i++) {

      const cartCoachings = [];

      for (let j = 0; j <= faker.random.number({ min: 0, max: 10 }); j++) {
        cartCoachings.push(coachings[j]);
      }

      carts.push({
        coachings: cartCoachings,
      });
    }

    // BOOKMARKS
    const bookmarks: BookmarkDTO[] = [];
    for (let i = 1; i <= faker.random.number({ min: 0, max: 5 }); i++) {
      const bookmark: BookmarkDTO = {
        article: articles[faker.random.number({ min: 0, max: articles.length - 1 })],
      };
      bookmarks.push(bookmark);
    }

    // WISHES
    const wishes: WishDTO[] = [];
    for (let i = 1; i <= faker.random.number({ min: 0, max: 5 }); i++) {
      const wish: WishDTO = {
        coaching: coachings[faker.random.number({ min: 0, max: coachings.length - 1})].id,
      };
      wishes.push(wish);
    }

    // SETTINGS
    const settings: SettingsDTO = {};

    const userDTO: UserDTO = {
      bodies,
      stats,
      followedCoachings,
      carts,
      bookmarks,
      wishes,
      settings,
    };

    await usersService.insert(userDTO);
    const user = await usersService.insert({});
    console.log(user);
  }
}
