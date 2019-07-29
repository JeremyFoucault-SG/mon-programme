import { CategoryDTO } from '../categories/category.dto';

export class ArticleDTO {
  public readonly title: string;
  public readonly content: string;
  public readonly author: string;
  public readonly categories: CategoryDTO[];
}
