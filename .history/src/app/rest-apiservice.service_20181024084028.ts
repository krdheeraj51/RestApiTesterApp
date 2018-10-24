import { Injectable } from '@angular/core';
//import package for Http
import {HttpClient,HttpErrorResponse,HttpClientModule} from '@angular/common/http';
// import{HttpClientModule} form '@angular/http';
@Injectable()
export class RestApiserviceService {
  public allData;
  public baseUrl;
  constructor(public http:HttpClient) { }
  public getAllData():any{
     let allData=this.http.get(this.baseUrl);
     console.log(allData);
  }

}
