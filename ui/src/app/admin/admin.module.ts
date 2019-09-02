import { NgxQuillModule } from '@dimpu/ngx-quill';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProgrammesComponent } from './programmes/programmes/programmes.component';
import { CreateArticleComponent } from './article/create-article/create-article.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteArticleComponent } from './article/delete-article/delete-article.component';
import { CoreModule } from '../core/core.module';
import { EditProgrammeComponent } from './programmes/edit-programme/edit-programme.component';
import { UpdateArticleComponent } from './article/update-article/update-article.component';
import { CreateProgrammeComponent } from './programmes/create-programme/create-programme.component';

@NgModule({
declarations: [
  ProgrammesComponent,
    CreateArticleComponent,
    DeleteArticleComponent,
    ProgrammesComponent,
    EditProgrammeComponent,
    UpdateArticleComponent,
    CreateProgrammeComponent
],

  imports: [
    CoreModule,
    NgxQuillModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  exports: [
    DeleteArticleComponent,
    UpdateArticleComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdminModule {}
