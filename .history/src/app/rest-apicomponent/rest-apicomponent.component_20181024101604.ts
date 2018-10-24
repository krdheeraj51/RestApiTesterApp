import { Component, OnInit } from '@angular/core';
import { RestApiserviceService } from '../rest-apiservice.service';

@Component({
  selector: 'app-rest-apicomponent',
  templateUrl: './rest-apicomponent.component.html',
  styleUrls: ['./rest-apicomponent.component.css']
})

export class RestApicomponentComponent implements OnInit {
  public allData;
  constructor(public restservice:RestApiserviceService) {
    console.log('RestAPI Component Constructor is called');
   }

  ngOnInit() {
       this.allData=this.restservice.getAllData().subscribe(
        data =>{
            console.log(data);
            this.allData=data;
            console.log(this.allData);
        },
        error =>{
          console.log(error.errorMessage);
        }
      );
      console.log(this.allData);
  }
}
