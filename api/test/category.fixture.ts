import * as faker from 'faker/locale/fr';
import { CategoriesService } from '../src/api/categories/categories.service';
import { CategoryDTO } from '../src/api/categories/category.dto';

export async function insertCategoryData(categoryService: CategoriesService) {

  await categoryService.insert({title: 'seche'});
  await categoryService.insert({title: 'entretien'});
  await categoryService.insert({title: 'raffermissement'});
  await categoryService.insert({title: 'prise-de-masse'});
  await categoryService.insert({title: 'stretching'});
  await categoryService.insert({title: 'recuperation'});
  await categoryService.insert({title: 'preparation-competition'});
  await categoryService.insert({title: 'tuto-exercice'});
  await categoryService.insert({title : 'style-de-vie-et-nutrition'});
  await categoryService.insert({title : 'sante'});
  await categoryService.insert({title : 'pratique-sportive'});
}
