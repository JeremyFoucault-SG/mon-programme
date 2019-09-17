export class Settings {
    constructor(
        public firstname?: string,
        public lastname?: string,
        public email?: string,
        public password?: string,
        public confirm?: string,
        public age?: number,
        public weight?: number,
        public size?: number,
        public username?: string,
        public objectif?: string,
        // tslint:disable-next-line: variable-name
        public _id?: string,
    ) { }
}
