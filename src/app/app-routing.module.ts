import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ScrapingComponent} from './scraping/scraping.component';
import {SentimentAnalysisComponent} from './sentiment-analysis/sentiment-analysis.component';
import {FakeNewsComponent} from './fake-news/fake-news.component';


const routes: Routes = [
  {
    path:'scraping',
    component:ScrapingComponent
  },
  {
    path:'sentimentAnalysis',
    component:SentimentAnalysisComponent
  },
  {
    path:'fakeNewsAnalysis',
    component:FakeNewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
