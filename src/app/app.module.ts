import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { appRoutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layouts/layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { GraphQLModule } from './graphql.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    RouterModule.forRoot(appRoutes, {
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: 'enabled'
    }),
    HttpClientModule,
    GraphQLModule,
    ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'fr-FR'
  },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
