export class ArticleBlog {
    constructor(
        // tslint:disable-next-line: variable-name
        public _id: string,
        public title?: string,
        public category?: string,
        public tag?: string,
        public content?: string,
        public createdAt?: Date,
        public updatedAt?: Date,
    ) {
    }
}
