import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

import { CardArticleComponent } from './card-article.component';
import { Store } from '@ngxs/store';
import { ToastrService } from 'ngx-toastr';
import { FirstCharacterePipe } from '../../pipes/firstCharactere.pipe';
import { RouterLink, RouterModule } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from '../../shared.module';
import { AppModule } from 'src/app/app.module';
import { APP_BASE_HREF } from '@angular/common';

export const task = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

export const actions = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

storiesOf('Task', module)
  .addDecorator(
    moduleMetadata({
      imports: [AppModule, CoreModule, SharedModule],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}]
    })
  )
  .add('default', () => {
    return {
      template: `<app-card-article [article]="article"></app-card-article>`,
      props: {
        isReverse: true,
        article: {
            title: "ddqdqsdd"
        }
      },
    };
  })
