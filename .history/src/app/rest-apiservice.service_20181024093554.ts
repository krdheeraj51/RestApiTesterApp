import { Injectable } from '@angular/core';
//import Http packages
import {HttpClient} from '@angular/common/http';
// import{HttpClientModule} form '@angular/http';
import { Observable } from "rxjs/observable";
// import 'rxjs/add/opertaor/catch';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/operator/do';
@Injectable()
export class RestApiserviceService {
  public allData;
  public baseUrl='https://jsonplaceholder.typicode.com/posts';
  
  constructor(public http:HttpClient) { }
  public getAllData():any{
     let allData=this.http.get(this.baseUrl);
     console.log(allData);
     return allData;
  }

}
