import { storiesOf, moduleMetadata } from '@storybook/angular';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from '../../shared.module';
import { AppModule } from 'src/app/app.module';
import { APP_BASE_HREF } from '@angular/common';
import { withKnobs, text, number, boolean, array } from '@storybook/addon-knobs';

const stories = storiesOf('card-thumb-program-component', module);

export const programme = {
    _id: 'je suis un id',
    rating: 1,
    title: 'je suis un titre',
    // tslint:disable-next-line: max-line-length
    imageUrl: 'https://www.iledefrance.fr/sites/default/files/styles/folder_key_content_large/public/2019-03/sports.jpg?h=153ae8b7&itok=9ckQK4ne'
};

stories.addDecorator(withKnobs);
stories.addDecorator(
    moduleMetadata({
        imports: [AppModule, CoreModule, SharedModule],
        providers: [{provide: APP_BASE_HREF, useValue: '/'}]
    })
    )
    .add('default', () => {
        return {
            // tslint:disable-next-line: max-line-length
            template: `<app-card-thumb-program
                [isContentOverlay]='isContentOverlay'
                [urlTitle]='urlTitle'
                [title]='title'
                [hasBgOverlay]='hasBgOverlay'
                [imageUrl]='imageUrl'
                [level]='level'
                [inlineStars]='inlineStars'
                ></app-card-thumb-program>`,
            props: {
                isContentOverlay: boolean('isContentOverlay', false),
                urlTitle: array('urlTitle', ['title']),
                title: text('title', 'Je suis un titre'),
                hasBgOverlay: boolean('hasBgOverlay', true),
                // tslint:disable-next-line: max-line-length
                imageUrl: text('imageUrl', 'https://www.iledefrance.fr/sites/default/files/styles/folder_key_content_large/public/2019-03/sports.jpg?h=153ae8b7&itok=9ckQK4ne'),
                level: text('level', 'Je suis un level'),
                inlineStars: number('inlineStars', 1),
            },
        };
    });
