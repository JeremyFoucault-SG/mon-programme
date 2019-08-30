export class ArticleBlog {
    constructor(
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
