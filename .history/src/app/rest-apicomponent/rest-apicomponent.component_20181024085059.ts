import { Component, OnInit } from '@angular/core';
import { RestApiserviceService } from '../rest-apiservice.service';

@Component({
  selector: 'app-rest-apicomponent',
  templateUrl: './rest-apicomponent.component.html',
  styleUrls: ['./rest-apicomponent.component.css']
})

export class RestApicomponentComponent implements OnInit {
  //  public allData;
  constructor(public restservice:RestApiserviceService) {
    console.log('RestAPI Component Constructor is called');
   }

  ngOnInit() {
      let allData=this.restservice.getAllData();
      console.log(allData);
    
  }


}
