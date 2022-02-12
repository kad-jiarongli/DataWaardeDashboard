import { Injectable } from '@angular/core';
import { Observable,throwError,Subject } from 'rxjs';
import {map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import {CommoninfoBinding } from './model/binding';

@Injectable({
  providedIn: 'root'
})
export class SparqlService {
  //api
  commoninfoApi:string= "https://api.labs.kadaster.nl/queries/jiarong-li2/data-waarde-getCommonInfo/run";
  keywordsApi: string= "https://api.labs.kadaster.nl/queries/jiarong-li2/data-waarde-getKeywords/run"
  themesApi: string="https://api.labs.kadaster.nl/queries/jiarong-li2/data-waarde-getTheme/run"
  
  //subject objects
  commonInfo$ = new Subject<CommoninfoBinding>();
  keywords$=new Subject<any[]>();
  themes$=new Subject<any[]>();

  constructor(private http: HttpClient) { }
  
  // http request methods
  getSingleQueryResult(queryApi:string): Observable<any> {
    return this.http.get<any>(queryApi, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/sparql-results+json"
      }
    }).pipe(
      map(result => result.results.bindings[0]),
    )
  };

  getMultiQueryResult(queryApi:string): Observable<any[]> {
    return this.http.get<any>(queryApi, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/sparql-results+json"
      }
    }).pipe(
      map(result => result.results.bindings),
    )
  };
  
  //get data
  getCommoninfo(){
    this.getSingleQueryResult(this.commoninfoApi).subscribe(data=>this.commonInfo$.next(data));
  }

  getKeywords(){
    this.getMultiQueryResult(this.keywordsApi).subscribe(data=>this.keywords$.next(data));
  }
  
  getThemes() {
    this.getMultiQueryResult(this.themesApi).subscribe(data=>this.themes$.next(data));
  }


}
