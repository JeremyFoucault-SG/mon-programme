
export class ProgramDetail {
  public title: string;
  public link: string;
  public photoUrl: string;
  public videoUrl: string;
}
export class ProgramsList {
  public static readonly infos: ProgramDetail[] = [
    {
      title: 'NUTRITION',
      link: 'nutrition',
      photoUrl: 'https://zupimages.net/up/19/31/puje.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=Or_spxqqtTQ'
    },
    {
      title: 'SANTE',
      link: 'sante',
      photoUrl: 'https://zupimages.net/up/19/31/zxym.jpeg',
      videoUrl: 'https://www.youtube.com/watch?v=Tp3gRmb1X1g'
    },
    {
      title: 'PRATIQUE SPORTIVE',
      link: 'pratique-sportive',
      photoUrl: 'https://zupimages.net/up/19/31/jvxm.jpeg',
      videoUrl: 'https://www.youtube.com/watch?v=tu2VdQ8XAVw&t=2s'
    }
  ];
}
