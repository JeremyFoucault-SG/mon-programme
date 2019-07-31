import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopupAccueilComponent } from './features/popup-accueil/popup-accueil.component';
import { PopupMwComponent } from './features/popup-mw/popup-mw.component';
import { NewsletterComponent } from './shared/components/newsletter/newsletter.component';
import { CardBlogComponent } from './shared/components/card-blog/card-blog.component';
import { HomeComponent } from './features/home/home.component';

const routes: Routes = [
  {path: '', component: PopupAccueilComponent},
  {
    path: 'men',
    component: PopupMwComponent,
    data: { isMen: true}
  },
  {
    path: 'women',
    component: PopupMwComponent,
    data: { isWomen: true}
  },
  {
    path: 'choose',
    component: PopupMwComponent,
    data: { isChoose: true}
  },
  {path: 'home', component: HomeComponent},
  {path: 'newsletter', component: NewsletterComponent},
  {path: 'blog', component: CardBlogComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
