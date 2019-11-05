import { QuillModule } from 'ngx-quill';
import { NgModule } from '@angular/core';
import { ProgrammesComponent } from './programmes/programmes/programmes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { EditProgrammeComponent } from './programmes/edit-programme/edit-programme.component';
import { UpdateArticleComponent } from './article/update-article/update-article.component';
import { ArticleComponent } from './article/article/article.component';

import {
  faTimes,
  faCloudUploadAlt
} from '@fortawesome/free-solid-svg-icons';
import {
  FontAwesomeModule,
  FaIconLibrary
} from '@fortawesome/angular-fontawesome';
import Quill from 'quill';
import imageUpload from 'quill-plugin-image-upload';
import BlotFormatter from 'quill-blot-formatter';
import { HttpClientModule } from '@angular/common/http';
import { ngfModule } from 'angular-file';
import { environment } from '../../environments/environment';
// register quill-plugin-image-upload
Quill.register('modules/imageUpload', imageUpload);
Quill.register('modules/blotFormatter', BlotFormatter);

export function uploader(file) {
  const apiUrl = `${environment.apiUrl}/upload`;

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
    HttpClientModule,
    FormsModule,
    ngfModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    QuillModule.forRoot({
      modules: {
        // ImageResize: {
        //   modules: ["Resize", "DisplaySize", "Toolbar"]
        // },
        blotFormatter: {
          // empty object for default behaviour.
        },
        imageUpload: {
          upload: uploader
        }
      }
    })
  ],
  exports: [UpdateArticleComponent],
})
export class AdminModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faTimes, faCloudUploadAlt
    );
  }
}
