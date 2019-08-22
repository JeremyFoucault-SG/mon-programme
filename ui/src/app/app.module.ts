
// Imports Modules //
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';


// Imports Components //
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { FeaturesModule } from './features/features.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule,
    SharedModule,
    FeaturesModule,
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
