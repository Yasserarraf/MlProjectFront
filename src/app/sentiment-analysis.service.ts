import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SentimentAnalysisService {

  public host:string="http://localhost:5000";

  article;

  constructor(private http:HttpClient) { }


  getRessource(url){
    return this.http.get(url);
  }
  setArticle(data){
    this.article = data;
  }
  getArticle(){
    return this.article;
  }

}
