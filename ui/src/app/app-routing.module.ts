import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopupAccueilComponent } from './features/popup-accueil/popup-accueil.component';
import { PopupHommeComponent } from './features/popup-homme/popup-homme.component';
import { PopupFemmeComponent } from './features/popup-femme/popup-femme.component';
import { HomeComponent } from './features/home/home.component';

const routes: Routes = [
  {path: '', component: PopupAccueilComponent},
  {path: 'homme', component: PopupHommeComponent},
  {path: 'femme', component: PopupFemmeComponent},
  {path: 'home-men', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
