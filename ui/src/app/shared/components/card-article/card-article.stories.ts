import { storiesOf, moduleMetadata } from '@storybook/angular';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from '../../shared.module';
import { AppModule } from 'src/app/app.module';
import { APP_BASE_HREF } from '@angular/common';

export const card = {
  _id: '02',
  title: 'Je suis un titre',
  content: 'Je suis du contenu Je suis du contenu Je suis du contenu Je suis du contenu Je suis du contenu...',
  image: 'https://www.iledefrance.fr/sites/default/files/styles/folder_key_content_large/public/2019-03/sports.jpg?h=153ae8b7&itok=9ckQK4ne'
};

storiesOf('card-article-component', module)
  .addDecorator(
    moduleMetadata({
      imports: [AppModule, CoreModule, SharedModule],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}]
    })
  )
  .add('isReverse = true', () => {
    return {
      template: `<app-card-article [isFavorite]="isFavorite" [isReverse]="isReverse" [article]="article"></app-card-article>`,
      props: {
        isReverse: true,
        isFavorite: false,
        article: card
      },
    };
  })
  .add('isReverse = false', () => {
    return {
      template: `<app-card-article [isFavorite]="isFavorite" [isReverse]="isReverse" [article]="article"></app-card-article>`,
      props: {
        isReverse: false,
        isFavorite: false,
        article: card
      },
    };
  })
  .add('isFavorite = true', () => {
    return {
      template: `<app-card-article [isFavorite]="isFavorite" [isReverse]="isReverse" [article]="article"></app-card-article>`,
      props: {
        isReverse: false,
        isFavorite: true,
        article: card
      },
    };
  })
  .add('isFavorite = false', () => {
    return {
      template: `<app-card-article [isFavorite]="isFavorite" [isReverse]="isReverse" [article]="article"></app-card-article>`,
      props: {
        isReverse: false,
        isFavorite: false,
        article: card
      },
    };
  })
  .add('with article proprety', () => {
    return {
      template: `<app-card-article [isFavorite]="isFavorite" [isReverse]="isReverse" [article]="article"></app-card-article>`,
      props: {
        isReverse: false,
        isFavorite: false,
        article: card
      },
    };
  })
  .add('without article proprety', () => {
    return {
      template: `<app-card-article [isFavorite]="isFavorite" [isReverse]="isReverse" [article]="article"></app-card-article>`,
      props: {
        isReverse: false,
        isFavorite: false
      },
    };
  })
  .add('1 article', () => {
    return {
      template: `<app-card-article [isFavorite]="isFavorite" [isReverse]="isReverse" [article]="article"></app-card-article>`,
      props: {
        isReverse: false,
        isFavorite: false,
        article: card
      },
    };
  })
  .add('many articles', () => {
    return {
      template: `<app-card-article [isFavorite]="isFavorite" [isReverse]="isReverse" [article]="article"></app-card-article>
      <app-card-article [isFavorite]="isFavorite" [isReverse]="!isReverse" [article]="article"></app-card-article>
      <app-card-article [isFavorite]="isFavorite" [isReverse]="isReverse" [article]="article"></app-card-article>`,
      props: {
        isReverse: false,
        isFavorite: false,
        article: card
      },
    };
  });
