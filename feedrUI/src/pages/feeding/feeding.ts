import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FeedingSchedulePage } from "../feedingSchedule/feedingSchedule";
import { PostFeedPage } from "../postFeed/postFeed";
import { FeedNowPage } from "../feedNow/feedNow";

@Component({
  selector: 'page-feeding',
  templateUrl: 'feeding.html'
})
export class FeedingPage {

feedingSchedulePage: any;
postFeedPage: any;
feedNowPage: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.feedingSchedulePage = FeedingSchedulePage;
   this.postFeedPage = PostFeedPage;
    this.feedNowPage = FeedNowPage;

  }

}
