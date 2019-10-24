import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from './store/store.module';
import { JwtModule } from '@auth0/angular-jwt';
import { ConnexionModalComponent } from '../shared/components/register/connexion-modal/connexion-modal.component';
import { ConnexionModal2Component } from '../shared/components/register/connexion-modal2/connexion-modal2.component';
import { RegisterComponent } from '../shared/components/register/register.component';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    JwtModule.forRoot({
      config: {
        // tslint:disable-next-line: object-literal-shorthand
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:3000'],
      }
    }),
    RouterModule,
    CommonModule,
    StoreModule,
  ],
  exports: [
    HeaderComponent,
  ],
  entryComponents : [
    ConnexionModalComponent,
    ConnexionModal2Component,
    RegisterComponent,
  ]
})
export class CoreModule { }
