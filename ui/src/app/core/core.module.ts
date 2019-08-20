import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterSmComponent } from './footer/footer-sm/footer-sm.component';
import { FeaturesModule } from '../features/features.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterSmComponent
  ],
  imports: [
    CommonModule,
    FeaturesModule
  ],
  exports: [
    HeaderComponent,
    FooterSmComponent
  ]
})
export class CoreModule { }
