import * as faker from 'faker/locale/fr';
import { CategoriesService } from '../src/api/categories/categories.service';
import { CategoryDTO } from '../src/api/categories/category.dto';

export async function insertArticleData(categoryService: CategoriesService) {
  // populate mongo
  for (let i = 1; i <= 50; i++) {
    const categoryDTO: CategoryDTO = {title: faker.lorem.sentence(50)};
    await categoryService.insert(categoryDTO);
  }
}
