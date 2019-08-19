import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterSmComponent } from './footer/footer-sm/footer-sm.component';
import { FooterInformationSmComponent } from './footer/footer-information-sm/footer-information-sm.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterSmComponent,
    FooterInformationSmComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterSmComponent
  ]
})
export class CoreModule { }
