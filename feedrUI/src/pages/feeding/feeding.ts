import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FeedingSchedulePage } from "../feedingSchedule/feedingSchedule";

@Component({
  selector: 'page-feeding',
  templateUrl: 'feeding.html'
})
export class FeedingPage {

feedingSchedulePage: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.feedingSchedulePage = FeedingSchedulePage;

  }

}
