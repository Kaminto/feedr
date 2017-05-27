import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FeedingPage } from "../feeding/feeding";
import { SecurityPage } from "../security/security";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  securityPage: any;
feedingPage: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.feedingPage = FeedingPage;
  this.securityPage = SecurityPage;

  }

}
