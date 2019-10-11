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
    QuillModule.forRoot()
  ],
  exports: [
    UpdateArticleComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdminModule {}
