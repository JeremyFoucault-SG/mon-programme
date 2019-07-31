import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopupAccueilComponent } from './features/popup-accueil/popup-accueil.component';
import { PopupMwComponent } from './features/popup-mw/popup-mw.component';
import { HomeComponent } from './features/home/home.component';

const routes: Routes = [
  {path: '', component: PopupAccueilComponent},
  {path: 'homme', component: PopupMwComponent},
  {path: 'femme', component: PopupMwComponent},
  {path: 'home', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
