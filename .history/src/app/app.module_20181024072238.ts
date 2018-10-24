import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RestApicomponentComponent } from './rest-apicomponent/rest-apicomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    RestApicomponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
