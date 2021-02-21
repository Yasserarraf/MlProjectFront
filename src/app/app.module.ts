import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScrapingComponent } from './scraping/scraping.component';
import { FakeNewsComponent } from './fake-news/fake-news.component';

import {HttpClientModule} from '@angular/common/http';
import { SentimentAnalysisComponent } from './sentiment-analysis/sentiment-analysis.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ScrapingComponent,
    FakeNewsComponent,
    SentimentAnalysisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
