export class Programme {
    constructor(
        // tslint:disable-next-line: variable-name
        public _id: string,
        public rating?: number,
        public title?: string,
        public content?: string,
        public imageUrl?: string,
        public level?: string,
        public price?: number,
        public urlTitle?: string,
    ) { }
}
