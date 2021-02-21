import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScrapingService {

  public host:string="http://localhost:5000";
  constructor(private http:HttpClient) { }




  getRessource(url){
    return this.http.get(url);
  }
}
