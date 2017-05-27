import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SignupPage } from "../signup/signup";

//import { RestApi } from '../../providers/restApi';
/*
  Generated class for the Account page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})

export class AccountPage {
signupPage: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.signupPage = SignupPage;


  }


 
  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }

}
