import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ArticleState } from './store.module/article/article.state';

@NgModule({
    declarations: [

    ],
    imports: [

        NgxsModule.forRoot([
            ArticleState
        ]),
        NgxsReduxDevtoolsPluginModule.forRoot(),
        NgxsLoggerPluginModule.forRoot()
    ],
    providers: [],
    bootstrap: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class StoreModule { }
