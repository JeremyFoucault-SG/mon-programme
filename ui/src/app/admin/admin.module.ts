import { NgxQuillModule } from '@dimpu/ngx-quill';
import { QuillModule } from 'ngx-quill';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProgrammesComponent } from './programmes/programmes/programmes.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from '../core/core.module';
import { EditProgrammeComponent } from './programmes/edit-programme/edit-programme.component';
import { UpdateArticleComponent } from './article/update-article/update-article.component';
import { ArticleComponent } from './article/article/article.component';
import Quill from 'quill';
import imageUpload from 'quill-plugin-image-upload';

// register quill-plugin-image-upload
Quill.register('modules/imageUpload', imageUpload);

@NgModule({
  declarations: [
    ProgrammesComponent,
    ProgrammesComponent,
    EditProgrammeComponent,
    UpdateArticleComponent,
    ArticleComponent
  ],

  imports: [
    CoreModule,
    NgxQuillModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    QuillModule.forRoot({
      modules: {
        imageUpload: {
          upload: file => {
            // return a Promise that resolves in a link to the uploaded image
            return new Promise((resolve, reject) => {
              const data = new FormData();
              data.append('file', file[0]);
              data.append('user', 'hubot');
              fetch('http://localhost:3000', {
                method: 'POST',
                body: data
              });
              return Promise.resolve();
            });
          }
        }
      }
    })
  ],
  exports: [UpdateArticleComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminModule {}
