import { ArticleBlog } from './articles-blog.model';
import { Programmes } from './programmes.model';

export class Wish {
    constructor(
        // tslint:disable-next-line: variable-name
        public wishId: string,
        public article?: ArticleBlog,
        public coaching?: Programmes,
    ) { }
}
