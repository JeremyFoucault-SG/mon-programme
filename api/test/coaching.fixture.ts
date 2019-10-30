import * as faker from 'faker/locale/fr';
import { CoachingsService } from '../src/api/coachings/coachings.service';
import { CoachingDTO } from '../src/api/coachings/coaching.dto';
import { CategoriesService } from 'src/api/categories/categories.service';
import { SeanceDTO } from 'src/api/coachings/coachings-details-DTO/seance.dto';

export async function insertCoachingData(
  coachingService: CoachingsService,
  categoryService: CategoriesService,
) {
  // populate mongo
  const categories = await categoryService.findAll();

  for (let i = 1; i <= 50; i++) {
    const coachingDTO: CoachingDTO = {
      title: faker.lorem.sentence(2),
      content: faker.lorem.sentences(10),
      rating: faker.random.number(5),
      categories: [
        categories[faker.random.number({ min: 0, max: categories.length - 1 })],
      ],
      imageUrl: faker.image.sports(),
      level: faker.lorem.sentence(2),
      price: faker.random.number(2),
      nameCitation: faker.name.firstName(20),
      citation: faker.lorem.sentences(20),
      seances: [
        {
          index: 3,
          repTime: 3,
          muscles: [
            {
              type: 'Pecs',
              detail: [
                {
                  index: 1,
                  exercise: 'Développé incliné haltères',
                  series: 5,
                  reps: 10,
                },
                {
                  index: 2,
                  exercise: 'Développé incliné barre libre',
                  series: 3,
                  reps: 15,
                },
                {
                  index: 3,
                  exercise: 'Développé couché haltères',
                  series: 4,
                  reps: 12,
                },
                {
                  index: 4,
                  exercise: 'Ecarté poulies hautes vis à vis',
                  series: 3,
                  reps: 15,
                },
              ],
            },
            {
              type: 'Pecs',
              detail: [{
                  index: 1,
                  exercise: 'Tirage poulie haute poitrine',
                  series: 4,
                  reps: 15,
                },
                {
                  index: 2,
                  exercise: 'Tirage poulie haute prise serrée',
                  series: 4,
                  reps: 10,
                },
                {
                  index: 3,
                  exercise: 'Rowing horizontal prise large',
                  series: 3,
                  reps: 15,
                },
                {
                  index: 4,
                  exercise: 'Rowing haltère debout de chaque côté',
                  series: 3,
                  reps: 10,
                },
              ],
            },
            {
              type: 'Jambes',
              detail: [{
                  index: 1,
                  exercise: 'Leg extension',
                  series: 4,
                  reps: 20,
                },
                {
                  index: 2,
                  exercise: 'Squat barre libre',
                  series: 5,
                  reps: 10,
                },
                {
                  index: 3,
                  exercise: 'Presse 45°',
                  series: 4,
                  reps: 12,
                },
                {
                  index: 4,
                  exercise: 'Fentes en marchant',
                  series: 4,
                  reps: 30,
                },
                {
                  index: 5,
                  exercise: 'Soulevé de terre jambes tendues barre libre',
                  series: 5,
                  reps: 15,
                },
                {
                  index: 6,
                  exercise: 'Mollets assis',
                  series: 5,
                  reps: 15,
                },
              ],
            },
            {
              type: 'Epaules',
              detail: [{
                  index: 1,
                  exercise: 'Haltères élévations latérales',
                  series: 4,
                  reps: 10,
                },
                {
                  index: 2,
                  exercise: 'Développé barre libre nuque',
                  series: 4,
                  reps: 12,
                },
                {
                  index: 3,
                  exercise: 'Elévations frontales barre droite',
                  series: 4,
                  reps: 12,
                },
                {
                  index: 4,
                  exercise: 'Arrière d’épaules (oiseau) haltères assis',
                  series: 4,
                  reps: 15,
                },
              ],
            },
            {
              type: 'Trapèzes',
              detail: [{
                  index: 1,
                  exercise: 'Shrug haltères debout',
                  series: 4,
                  reps: 15,
                },
              ],
            },
          ],
        },
      ],
    };
    await coachingService.insert(coachingDTO);
  }
}
