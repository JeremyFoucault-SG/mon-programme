import * as faker from 'faker/locale/fr';
import { CategoriesService } from '../src/api/categories/categories.service';
import { CategoryDTO } from '../src/api/categories/category.dto';

export async function insertCategoryData(categoryService: CategoriesService) {
  // // populate mongo
  // for (let i = 1; i <= 50; i++) {
  //   const categoryDTO: CategoryDTO = {title: faker.lorem.sentence(50)};
  //   await categoryService.insert(categoryDTO);
  // }

  await categoryService.insert({title: 'seche'});
  await categoryService.insert({title: 'entretien'});
  await categoryService.insert({title: 'raffermissement'});
  await categoryService.insert({title: 'prise-de-masse'});
  await categoryService.insert({title: 'stretching'});
  await categoryService.insert({title: 'recuperation'});
  await categoryService.insert({title: 'preparation-competition'});
  await categoryService.insert({title: 'tuto-exercice'});

}
