import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ArticleState } from './store.module/article/article.state';
import { ProgrammeState } from './store.module/programme/programme.state';
import { BookmarkState } from './store.module/bookmark/bookmark.state';
import { NewsletterState } from './store.module/newsletter/newsletter.state';
import { FollowedState } from './store.module/followed-coaching/followed.state';
import { SettingState } from './store.module/settings/setting.state';
import { WishState } from './store.module/wishe/wish.state';
import { BodyState } from './store.module/body/body.state';

@NgModule({
    declarations: [

    ],
    imports: [

        NgxsModule.forRoot([
            ArticleState,
            ProgrammeState,
            BookmarkState,
            NewsletterState,
            FollowedState,
            WishState,
            SettingState,
            BodyState
                ]),
        NgxsReduxDevtoolsPluginModule.forRoot(),
        NgxsLoggerPluginModule.forRoot()
    ],
    providers: [],
    bootstrap: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class StoreModule { }
