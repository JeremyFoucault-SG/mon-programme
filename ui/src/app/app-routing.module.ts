import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopupAccueilComponent } from './features/popup-accueil/popup-accueil.component';
import { PopupHommeComponent } from './features/popup-homme/popup-homme.component';
import { PopupFemmeComponent } from './features/popup-femme/popup-femme.component';
import { HomeMenComponent } from './features/home-men/home-men.component';
import { HomeWomenComponent } from './features/home-women/home-women.component';
import { NewsletterComponent } from './shared/components/newsletter/newsletter.component';
import { CardBlogComponent } from './shared/components/card-blog/card-blog.component';

const routes: Routes = [
  {path: '', component: PopupAccueilComponent},
  {path: 'homme', component: PopupHommeComponent},
  {path: 'femme', component: PopupFemmeComponent},
  {path: 'home-men', component: HomeMenComponent},
  {path: 'home-women', component: HomeWomenComponent},
  {path: 'newsletter', component: NewsletterComponent},
  {path: 'blog', component: CardBlogComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
