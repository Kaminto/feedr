import { Component } from "@angular/core";
import { NavController, AlertController } from "ionic-angular";




@Component({
  selector: 'signup-page',
  templateUrl: 'signup.html',
  styleUrls: ['/signup.scss']
})
export class SignupPage {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  departureOne: string;
  departureOneTime: string;
  arrivalOne: string;
  arrivalOneTime: string;
  departureTwo: string;
  departureTwoTime: string;
  arrivalTwo: string;
  arrivalTimeTwo: string;


  constructor(private navCtrl: NavController,  private alertCtrl: AlertController) {


  }
 
  register(){
 
  
  
 
  }


}
