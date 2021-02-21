import { Component, OnInit } from '@angular/core';
import {SentimentAnalysisService} from '../sentiment-analysis.service';

@Component({
  selector: 'app-sentiment-analysis',
  templateUrl: './sentiment-analysis.component.html',
  styleUrls: ['./sentiment-analysis.component.css']
})
export class SentimentAnalysisComponent implements OnInit {

  constructor(private sentimentAnalysisService:SentimentAnalysisService) { }
  analysis;
  featureExtraction;
  sentimentAnalysisData;
  textPreProcessing = {};
  isLoading;
  ngOnInit() {
    this.isLoading = false
  }

  onAnalyse() {
    this.isLoading = true;
    let url = this.sentimentAnalysisService.host + '/sentimentAnalysis'
    this.sentimentAnalysisService.getRessource(url)
      .subscribe(data=>{
        this.analysis = data;
        this.featureExtraction = JSON.parse(this.analysis.feature_extraction);
        this.sentimentAnalysisData = JSON.parse(this.analysis.sentiment_analysis);
        for(let k in this.analysis.text_pre_processing){
          this.textPreProcessing[k] = JSON.parse(this.analysis.text_pre_processing[k]);
          console.log(k)
        }

        console.log(this.featureExtraction)

        console.log(this.sentimentAnalysisData)

        console.log(this.textPreProcessing)

        if(this.analysis){
          this.isLoading = false;
        }
        console.log(data);
      })
  }
}
