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
import { InfosDTO } from '../src/api/settings/infos.dto';
import { FollowedCoachingsService } from 'src/api/followed-coachings/followed-coachings.service';

export async function insertUserData(
  articlesService: ArticlesService,
  coachingsService: CoachingsService,
  followedCoachingsService: FollowedCoachingsService,
  usersService: UsersService,
) {
  // populate mongo

  // Get inserted data for populate user
  const coachings = await coachingsService.findAll();
  const articles = await articlesService.findAll();

  {
    const user = (await usersService.findAll())[0];
    const myCoachings: FollowedCoachingDTO[] = [];
    for (let i = 0; i <= faker.random.number({ min: 5, max: 10 }); i++) {
      const followedCoaching: FollowedCoachingDTO = {
        rating: faker.random.number({ min: 0, max: 5 }),
        coaching:
          coachings[faker.random.number({ min: 5, max: coachings.length - 1 })]
            .id,
      };

      await followedCoachingsService.insert(user.id, followedCoaching);
      myCoachings.push(followedCoaching);
    }

  }

  for (let k = 0; k < 5; k++) {
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
    const myCoachings: FollowedCoachingDTO[] = [];
    for (let i = 0; i <= faker.random.number({ min: 5, max: 10 }); i++) {
      const followedCoaching: FollowedCoachingDTO = {
        rating: faker.random.number({ min: 0, max: 5 }),
        coaching:
          coachings[faker.random.number({ min: 5, max: coachings.length - 1 })]
            .id,
      };
      myCoachings.push(followedCoaching);
    }

    // CARTS
    // const carts: CartDTO[] = [];
    // for (let i = 0; i <= faker.random.number({ min: 0, max: 5 }); i++) {

    //   const cartCoachings = [];

    //   for (let j = 0; j <= faker.random.number({ min: 0, max: 10 }); j++) {
    //     cartCoachings.push(coachings[j]);
    //   }

    //   carts.push({
    //     coachings: cartCoachings,
    //   });
    // }
    const carts: CartDTO[] = [];
    for (let i = 1; i <= faker.random.number({ min: 0, max: 5 }); i++) {
      const cart: CartDTO = {
        cartId:
          coachings[faker.random.number({ min: 0, max: coachings.length - 1 })]
            .id,
      };
      carts.push(cart);
    }

    // BOOKMARKS
    const bookmarks: BookmarkDTO[] = [];
    // for (let i = 1; i <= faker.random.number({ min: 0, max: 5 }); i++) {
    //   const bookmark: BookmarkDTO = {
    //     article: articles[faker.random.number({ min: 0, max: articles.length - 1 })],
    //   };
    //   bookmarks.push(bookmark);
    // }

    // WISHES
    const wishes: WishDTO[] = [];
    for (let i = 1; i <= faker.random.number({ min: 0, max: 5 }); i++) {
      const wish: WishDTO = {
        wishId:
          coachings[faker.random.number({ min: 0, max: coachings.length - 1 })]
            .id,
      };
      wishes.push(wish);
    }

    // SETTINGS
    const settings: SettingsDTO = {
      infos: {
        age: faker.name.firstName(50),
        weight: faker.name.firstName(50),
        size: faker.name.firstName(50),
        goals: faker.name.firstName(50),
      },
      contact: {
        firstname: faker.name.firstName(50),
        lastname: faker.name.firstName(50),
        email: faker.name.firstName(50),
        address: faker.name.firstName(50),
        city: faker.name.firstName(50),
        cp: faker.name.firstName(50),
      },
      paiement: {
        rib: faker.name.firstName(50),
        iban: faker.name.firstName(50),
      },
    };

    const userDTO: UserDTO = {
      // bodies,
      // stats,
      myCoachings,
      // carts,
      // bookmarks,
      // wishes,
      settings,
    };

    await usersService.insert(userDTO);
  }

  await usersService.insert({});
}
