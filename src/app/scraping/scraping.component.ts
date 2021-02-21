import { Component, OnInit } from '@angular/core';
import {ScrapingService} from '../scraping.service';
import {SentimentAnalysisService} from '../sentiment-analysis.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-scraping',
  templateUrl: './scraping.component.html',
  styleUrls: ['./scraping.component.css']
})
export class ScrapingComponent implements OnInit {

  constructor(private scrapingService:ScrapingService,private sentimentAnalysisService:SentimentAnalysisService,private router:Router) { }
  articles;
  isLoading;
  p: number = 1;
  ngOnInit() {
    this.isLoading = false;
  }

  onScrape() {
    this.isLoading = true;
    console.log(this.scrapingService.host);
    let url = this.scrapingService.host + '/data';
    this.scrapingService.getRessource(url)
      .subscribe(data=>{
        this.articles = data;
        if(this.articles){
          this.isLoading = false;
        }
        console.log(data);
      })
  }

  onSentimentAnalysis(data) {
      this.sentimentAnalysisService.article = data;
      this.router.navigateByUrl('/sentimentAnalysis');
  }
}
