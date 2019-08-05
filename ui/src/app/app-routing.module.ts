import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopupAccueilComponent } from './features/popup-accueil/popup-accueil.component';
import { PopupMwComponent } from './features/popup-mw/popup-mw.component';
import { NewsletterComponent } from './shared/components/newsletter/newsletter.component';
import { HomeComponent } from './features/home/home.component';
import { ListBlogComponent } from './shared/components/list-blog/list-blog.component';

const routes: Routes = [
  {path: '', component: PopupAccueilComponent},
  {path: 'homme', component: PopupMwComponent},
  {path: 'femme', component: PopupMwComponent},
  {path: 'home', component: HomeComponent},
  {path: 'newsletter', component: NewsletterComponent},
  {path: 'blog', component: ListBlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
