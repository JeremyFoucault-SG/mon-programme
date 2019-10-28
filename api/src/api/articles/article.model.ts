import { Typegoose, prop, arrayProp, Ref, pre } from 'typegoose';
import { CategoryModel } from '../categories/category.model';

@pre<ArticleModel>('save', function(next) {
    if (this.title) {
        this.urlTitle = this.title.replace(/ /g, '-');
    }
    next();
})
export class ArticleModel extends Typegoose {
    @prop()
    createdAt: Date;

    @prop()
    id: string;

    @prop()
    updatedAt: Date;

    @prop()
    title: string;

    @prop()
    urlTitle: string;

    @prop()
    content: string;

    @prop()
    author: string;

    @prop()
    image: {
      id: string,
      url: string,
    };

    @prop()
    tags: string[];

    @arrayProp({ items: CategoryModel, _id: false })
    categories: Array<Ref<CategoryModel>>;
}
