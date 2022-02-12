import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { FooterComponent } from './footer/footer.component';

import { KeywordsThemesComponent } from './keywords-themes/keywords-themes.component';

import { DataModelBrowserComponent } from './data-model-browser/data-model-browser.component';
import { DataStoryBrowserComponent } from './data-story-browser/data-story-browser.component';
import { NavigationComponent } from './navigation/navigation.component';

import { ApiHintsComponent } from './api-hints/api-hints.component';
import { DataViewerComponent } from './data-viewer/data-viewer.component';

import { LinksComponent } from './links/links.component';

import { QualityMetricsComponent } from './quality-metrics/quality-metrics.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts'

import { HttpClientModule } from '@angular/common/http';
import { BasicInfoComponent } from './basic-info/basic-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    KeywordsThemesComponent,
    DataModelBrowserComponent,
    DataStoryBrowserComponent,
    NavigationComponent,
    ApiHintsComponent,
    DataViewerComponent,
    LinksComponent,
    QualityMetricsComponent,
    BasicInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
