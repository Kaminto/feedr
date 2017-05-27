import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';

@Component({
  selector: 'page-bluetoothCheck',
  templateUrl: 'bluetoothCheck.html'
})
export class BluetoothCheckgPage {
  msg:any;
  enable_button:boolean = false;
  toggle:boolean =true;

  
  constructor(public navCtrl: NavController, public navParams: NavParams,private bluetoothSerial: BluetoothSerial) {
 

  }

   checkBlueTooth(){
    this.bluetoothSerial.isEnabled().then((data)=>{
        this.msg = data;
      },(err)=>{
        this.msg = err;
        this.enable_button = true;
      });
  }
  toggleBlueTooth(){
    if(this.toggle){
       this.bluetoothSerial.enable().then((data)=>{
        this.msg = data;
      },(err)=>{
        this.msg = err;
      });
      this.toggle = false;
      
    }
    else{
      this.bluetoothSerial.disconnect();
     
    }
  }
  show_settings(){
    this.bluetoothSerial.showBluetoothSettings().then((data)=>{
        this.msg = data;
      },(err)=>{
        this.msg = err;
      });
      
      
    }



}
