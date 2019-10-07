import { ArticleBlog } from './articles-blog.model';
import { Programmes } from './programmes.model';

export class Wish {
    constructor(
        public wishId: string,
        // tslint:disable-next-line: variable-name
        public _id?: string,
        public article?: ArticleBlog,
        public coaching?: Programmes,
    ) { }
}
