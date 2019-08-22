
export class ProgramDetail {
    public title: string;
    public photoUrl: string;
    public videoUrl: string;
}
export class ProgramsList {
    public static readonly infos: ProgramDetail[] = [
        { title: 'NOS PROGRAMMES', photoUrl: 'https://zupimages.net/up/19/31/hmhq.png', videoUrl: 'https://youtu.be/rzjyrTokqXM' },
        // tslint:disable-next-line: max-line-length
        { title: 'NUTRITION', photoUrl: 'https://zupimages.net/up/19/31/puje.jpg', videoUrl: 'https://www.youtube.com/watch?v=Or_spxqqtTQ' },
        { title: 'SANTE', photoUrl: 'https://zupimages.net/up/19/31/zxym.jpeg', videoUrl: 'https://www.youtube.com/watch?v=Tp3gRmb1X1g' },
        // tslint:disable-next-line: max-line-length
        { title: 'PRATIQUE SPORTIVE', photoUrl: 'https://zupimages.net/up/19/31/jvxm.jpeg', videoUrl: 'https://www.youtube.com/watch?v=tu2VdQ8XAVw&t=2s' }
    ];
}
