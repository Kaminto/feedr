import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

/*
  Generated class for the Auth provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()

export class Auth {

   public token: any;
   domain: string;
   liveDomain: string;

  
 
  constructor(public http: Http, public storage: Storage) {
 // this.liveDomain="http://69.87.216.181:5051";
   this.liveDomain="http://localhost:5050";
  }
 checkAuthentication(){
 
    return new Promise((resolve, reject) => {
 
        //Load token if exists
        this.storage.get('token').then((value) => {
 
            this.token = value;
 
            let headers = new Headers();
            headers.append('Authorization', this.token);
 
            this.http.get(this.liveDomain+'/api/auth/protected', {headers: headers})
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                }); 
 
        });         
 
    });
 
  }
 
  createAccount(details){
 
    return new Promise((resolve, reject) => {
 
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
 
        this.http.post(this.liveDomain+'/api/auth/createAccount', JSON.stringify(details), {headers: headers})
          .subscribe(res => {
 
            let data = res.json();
            this.token = data.token;
            this.storage.set('token', data.token);
            resolve(data);
 
          }, (err) => {
            reject(err);
          });
 
    });
 
  }

 
  getNews(){
 
    return new Promise((resolve, reject) => {
 
      let headers = new Headers();
       headers.append('Content-Type', 'application/json');
 
      this.http.get(this.liveDomain+'/api/auth/getNews', {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          reject(err);
        });
    });
 
  }


 getRequests(){
 
    return new Promise((resolve, reject) => {
 
      let headers = new Headers();
       headers.append('Content-Type', 'application/json');
 
      this.http.get(this.liveDomain+'/api/auth/getRequests', {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          reject(err);
        });
    });
 
  }

 getTravelEvents(){
 
    return new Promise((resolve, reject) => {
 
      let headers = new Headers();
       headers.append('Content-Type', 'application/json');
 
      this.http.get(this.liveDomain+'/api/auth/getTravelEvents', {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          reject(err);
        });
    });
 
  }

   getCarClubs(){
 
    return new Promise((resolve, reject) => {
 
      let headers = new Headers();
       headers.append('Content-Type', 'application/json');
 
      this.http.get(this.liveDomain+'/api/auth/getCarClubs', {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          reject(err);
        });
    });
 
  }

  createNews(news){
     return new Promise((resolve, reject) => {
 
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
 
        this.http.post(this.liveDomain+'/api/auth/createNews', JSON.stringify(news), {headers: headers})
          .subscribe(res => {
 
            let data = res.json();
            this.token = data.token;
            this.storage.set('token', data.token);
            resolve(data);
 
          }, (err) => {
            reject(err);
          });
 
    });
  }
   createRequest(news){
     return new Promise((resolve, reject) => {
 
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
 
        this.http.post(this.liveDomain+'/api/auth/createRequest', JSON.stringify(news), {headers: headers})
          .subscribe(res => {
 
            let data = res.json();
            this.token = data.token;
            this.storage.set('token', data.token);
            resolve(data);
 
          }, (err) => {
            reject(err);
          });
 
    });
  }


 
  login(credentials){
 
    return new Promise((resolve, reject) => {
 console.log("hey");
  console.log(credentials);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
 
        this.http.post(this.liveDomain+'/api/auth/login', {username:credentials.email,password:credentials.password}, {headers: headers})
          .subscribe(res => {
 
            let data = res.json();
           /// this.token = data.token;
           // this.storage.set('token', data.token);
            resolve(data);
 
            resolve(res.json());
          }, (err) => {
            reject(err);
          });
 
    });
 
  }
 
  logout(){
    return new Promise((resolve, reject) => {
 console.log("hey");
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
 
        this.http.post(this.liveDomain+'/api/auth/logout', JSON.stringify({logout:true}), {headers: headers})
          .subscribe(res => {
 console.log("true");
            //let data = res.json();
           // this.token = data.token;
            //this.storage.set('token', data.token);
            resolve({true:true});
 
          //  resolve(res.json());
          }, (err) => {
            reject(err);
          });
 
    });
  }

}
