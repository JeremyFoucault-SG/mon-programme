import { Category } from './category.model';

export class ArticleBlog {
    constructor(
        // tslint:disable-next-line: variable-name
        public _id: string,
        public image?: string,
        public file?: string,
        public title?: string,
        public categories?: Category[],
        public tags?: string,
        public urlTitle?: string,
        public content?: string,
        public createdAt?: Date,
        public updatedAt?: Date,
    ) {
    }
}
