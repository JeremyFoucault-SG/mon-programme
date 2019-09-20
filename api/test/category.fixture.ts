import * as faker from 'faker/locale/fr';
import { CategoriesService } from '../src/api/categories/categories.service';
import { CategoryDTO } from '../src/api/categories/category.dto';

export async function insertCategoryData(categoryService: CategoriesService) {
  // populate mongo
  // for (let i = 1; i <= 50; i++) {
  //   const categoryDTO: CategoryDTO = {title: 'hello'};
  //   await categoryService.insert(categoryDTO);
  // }

  await categoryService.insert({title : 'style-de-vie-et-nutrition'});
  await categoryService.insert({title : 'sante'});
  await categoryService.insert({title : 'pratique-sportive'});

}
