
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
import BlotFormatter from 'quill-blot-formatter';
// register quill-plugin-image-upload
Quill.register('modules/imageUpload', imageUpload);
Quill.register('modules/blotFormatter', BlotFormatter);
const apiUrl = 'http://localhost:3000/upload';

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
    ReactiveFormsModule,
    BrowserAnimationsModule,
    QuillModule.forRoot({
      modules: {
        // ImageResize: {
        //   modules: ["Resize", "DisplaySize", "Toolbar"]
        // },
        blotFormatter: {
          // empty object for default behaviour.
        },
        imageUpload: {
          upload: file => {
            // return a Promise that resolves in a link to the uploaded image
            return new Promise(async (resolve, reject) => {
              const data = new FormData();
              data.append('file', file);
              console.log(file);
              const res = await fetch(apiUrl, {
                method: 'POST',
                body: data
              });
              const body = await res.json();
              console.log(body);
              resolve(body.url);
            });
          }
        }
      }
    })

  ],
  exports: [UpdateArticleComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminModule { }
