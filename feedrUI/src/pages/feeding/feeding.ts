import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FeedingSchedulePage } from "../feedingSchedule/feedingSchedule";
import { PastFeedPage } from "../pastFeed/pastFeed";
import { FeedNowPage } from "../feedNow/feedNow";

@Component({
  selector: 'page-feeding',
  templateUrl: 'feeding.html'
})
export class FeedingPage {

feedingSchedulePage: any;
pastFeedPage: any;
feedNowPage: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.feedingSchedulePage = FeedingSchedulePage;
   this.pastFeedPage = PastFeedPage;
    this.feedNowPage = FeedNowPage;

  }

}
