import { NgxQuillModule } from '@dimpu/ngx-quill';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProgrammesComponent } from './programmes/programmes/programmes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from '../core/core.module';
import {ReactiveFormsModule} from '@angular/forms';
import { EditProgrammeComponent } from './programmes/edit-programme/edit-programme.component';

@NgModule({
  declarations: [
    ProgrammesComponent,
    EditProgrammeComponent
  ],

  imports: [
    CoreModule,
    NgxQuillModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdminModule { }
