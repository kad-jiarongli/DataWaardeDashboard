import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { FooterComponent } from './footer/footer.component';
import { TitleComponent } from './title/title.component';
import { KeywordsThemesComponent } from './keywords-themes/keywords-themes.component';
import { AbstractComponent } from './abstract/abstract.component';
import { DataModelBrowserComponent } from './data-model-browser/data-model-browser.component';
import { DataStoryBrowserComponent } from './data-story-browser/data-story-browser.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    
    FooterComponent,
         TitleComponent,
         KeywordsThemesComponent,
         AbstractComponent,
         DataModelBrowserComponent,
         DataStoryBrowserComponent,
         NavigationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
