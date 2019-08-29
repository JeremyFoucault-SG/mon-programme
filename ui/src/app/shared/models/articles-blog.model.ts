export class ArticleBlog {
    constructor(
        public id?: string,
        public photoUrl?: string,
        public titre?: string,
        public content?: string,
        public author?: string,
        public createdAt?: Date,
        public updatedAt?: Date,
    ) {
    }
}
