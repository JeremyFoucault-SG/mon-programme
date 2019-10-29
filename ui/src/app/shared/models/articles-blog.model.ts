
export class ArticleBlog {
    constructor(
        // tslint:disable-next-line: variable-name
        public _id: string,
        public image?: string,
        public file?: string,
        public title?: string,
        public category?: string,
        public tags?: string[],
        public urlTitle?: string,
        public content?: string,
        public createdAt?: Date,
        public updatedAt?: Date,
    ) {
    }
}
