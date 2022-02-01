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
import { ServiceUptimeComponent } from './service-uptime/service-uptime.component';
import { UpdateFrequencyComponent } from './update-frequency/update-frequency.component';
import { ApiHintsComponent } from './api-hints/api-hints.component';
import { DataViewerComponent } from './data-viewer/data-viewer.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { MachineReadableComponent } from './machine-readable/machine-readable.component';
import { LinksComponent } from './links/links.component';

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
         NavigationComponent,
         ServiceUptimeComponent,
         UpdateFrequencyComponent,
         ApiHintsComponent,
         DataViewerComponent,
         StarRatingComponent,
         MachineReadableComponent,
         LinksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
