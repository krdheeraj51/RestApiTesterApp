import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
//Import Component
import { RestApicomponentComponent } from './rest-apicomponent/rest-apicomponent.component';
//import Service
import {RestApiserviceService} from './rest-apiservice.service';
//Import RouterModule
import{RouterModule,Router} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    RestApicomponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'all',component:RestApicomponentComponent}
    ])
  ], 
  //Adding Service inside Provide array
  providers: [RestApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
