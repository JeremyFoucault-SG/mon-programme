import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormCustomizeProgrammeComponent } from './components/form-customize-programme/form-customize-programme.component';
import { FormSelectionProgrammeComponent } from './components/form-selection-programme/form-selection-programme.component';
import { CardProgrammesComponent } from './components/card-programmes/card-programmes.component';
import { CardBlogComponent } from './components/list-blog/card-blog-lg/card-blog.component';
import { MenuComponent } from './components/menu/menu.component';
import { JoinTeamCodePromoComponent } from './components/join-team-code-promo/join-team-code-promo.component';
import { FooterHomeComponent } from './components/footer-home/footer-home.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardHomeComponent } from './components/card-home/card-home.component';
import { CardMinNosProgrammesComponent } from './components/card-min-nos-programmes/card-min-nos-programmes.component';
import { CardMinArticleComponent } from './components/card-min-article/card-min-article.component';
import { CardNosProgrammesComponent } from './components/card-nos-programmes/card-nos-programmes.component';
import { MenuNosProgrammeComponent } from './components/menu-nos-programme/menu-nos-programme.component';
import { ListBlogComponent } from './components/list-blog/list-blog.component';
import { CardBlogSmComponent } from './components/list-blog/card-blog-sm/card-blog-sm.component';



@NgModule({
  declarations: [
    FormCustomizeProgrammeComponent,
    FormSelectionProgrammeComponent,
    CardProgrammesComponent,
    CardBlogComponent,
    MenuComponent,
    JoinTeamCodePromoComponent,
    FooterHomeComponent,
    NewsletterComponent,
    FooterComponent,
    CardHomeComponent,
    CardMinNosProgrammesComponent,
    CardMinArticleComponent,
    CardNosProgrammesComponent,
    MenuNosProgrammeComponent,
    ListBlogComponent,
    CardBlogSmComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormCustomizeProgrammeComponent,
    FormSelectionProgrammeComponent,
    CardProgrammesComponent,
    CardBlogComponent,
    MenuComponent,
    JoinTeamCodePromoComponent,
    FooterHomeComponent,
    NewsletterComponent,
    FooterComponent,
    CardHomeComponent,
    CardMinNosProgrammesComponent,
    CardMinArticleComponent,
    CardNosProgrammesComponent,
    MenuNosProgrammeComponent,
  ]
})
export class SharedModule { }
