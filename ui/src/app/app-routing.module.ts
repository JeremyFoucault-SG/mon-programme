import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopupAccueilComponent } from './features/popup-accueil/popup-accueil.component';
import { PopupMwComponent } from './features/popup-mw/popup-mw.component';
import { NewsletterComponent } from './shared/components/newsletter/newsletter.component';
import { CardBlogComponent } from './shared/components/card-blog/card-blog.component';
import { HomeComponent } from './features/home/home.component';
import { FormSelectionProgrammeComponent } from './shared/components/form-selection-programme/form-selection-programme.component';

const routes: Routes = [
  {path: '', component: PopupAccueilComponent},
  {path: 'homme', component: PopupMwComponent},
  {path: 'femme', component: PopupMwComponent},
  {path: 'home', component: HomeComponent},
  {path: 'newsletter', component: NewsletterComponent},
  {path: 'blog', component: CardBlogComponent},
  {path: 'form', component: FormSelectionProgrammeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
