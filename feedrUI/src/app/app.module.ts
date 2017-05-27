import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AccountPage } from '../pages/account/account';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Auth } from '../providers/auth';
import { RestApi } from '../providers/restApi';
import { SignupPage } from "../pages/signup/signup";
import { FeedingSchedulePage } from "../pages/feedingSchedule/feedingSchedule";
import { FeedingPage } from "../pages/feeding/feeding";
import { SecurityPage } from "../pages/security/security";

import { FeedNowPage } from "../pages/feedNow/feedNow";
import { PostFeedPage } from "../pages/postFeed/postFeed";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AccountPage,
    SignupPage,
    SecurityPage,
    FeedingPage,
    FeedingSchedulePage,
    FeedNowPage,
    PostFeedPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AccountPage,
    SignupPage ,
    SecurityPage,
    FeedingPage,
    FeedingSchedulePage,
    FeedNowPage,
    PostFeedPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},Auth,RestApi
  ]
})
export class AppModule {}
