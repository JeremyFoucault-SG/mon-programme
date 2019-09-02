export class ArticleBlog {
    constructor(
        // tslint:disable-next-line: variable-name
        public _id?: string,
        public photoUrl?: string,
        public title?: string,
        public content?: string,
        public author?: string,
        public createdAt?: Date,
        public updatedAt?: Date,
    ) {
    }
}
