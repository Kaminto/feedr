import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Auth } from './auth';

import 'rxjs/add/operator/map';
 
@Injectable()
export class RestApi {
 domain: string;
   liveDomain: string;

  constructor(public http: Http, public authService: Auth) {
 //this.liveDomain="http://69.87.216.181:5051";
   this.liveDomain="http://localhost:5050";
  }
 
  

  

 


   
 
   
 
}