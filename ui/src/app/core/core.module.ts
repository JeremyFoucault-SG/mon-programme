import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from './store/store.module';
import { JwtModule } from '@auth0/angular-jwt';
import { ConnexionModalComponent } from '../shared/components/connexion-modal/connexion-modal.component';
import { ConnexionModal2Component } from '../shared/components/connexion-modal2/connexion-modal2.component';

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
  ]
})
export class CoreModule { }
