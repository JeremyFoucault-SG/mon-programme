
// Imports Modules //
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


// Imports Components //
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormCustomizeProgrammeComponent } from './shared/components/form-customize-programme/form-customize-programme.component';
import { FormSelectionProgrammeComponent } from './shared/components/form-selection-programme/form-selection-programme.component';
import { CardProgrammesComponent } from './shared/components/card-programmes/card-programmes.component';
import { CardBlogComponent } from './shared/components/card-blog/card-blog.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { JoinTeamCodePromoComponent } from './shared/components/join-team-code-promo/join-team-code-promo.component';
import { FooterHomeComponent } from './features/footer-home/footer-home.component';
import { NewsletterComponent } from './shared/components/newsletter/newsletter.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CardHomeComponent } from './features/card-home/card-home.component';
import { CardMinNosProgrammesComponent } from './shared/components/card-min-nos-programmes/card-min-nos-programmes.component';
import { CardMinArticleComponent } from './shared/components/card-min-article/card-min-article.component';
import { CardNosProgrammesComponent } from './shared/components/card-nos-programmes/card-nos-programmes.component';
import { MenuNosProgrammeComponent } from './shared/components/menu-nos-programme/menu-nos-programme.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { PopupAccueilComponent } from './features/popup-accueil/popup-accueil.component';
import { PopupHommeComponent } from './features/popup-homme/popup-homme.component';
import { PopupFemmeComponent } from './features/popup-femme/popup-femme.component';
import { HomeComponent } from './features/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
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
    HeaderComponent,
    PopupAccueilComponent,
    PopupHommeComponent,
    PopupFemmeComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
