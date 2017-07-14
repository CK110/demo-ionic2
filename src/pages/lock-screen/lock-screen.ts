import { Component } from '@angular/core';
import {IonicPage,ViewController} from 'ionic-angular';
import {TouchID} from "@ionic-native/touch-id";

/**
 * 指纹解锁 for ios
 */
@IonicPage()
@Component({
  selector: 'page-lock-screen',
  templateUrl: 'lock-screen.html',
})
export class LockScreenPage {

  constructor(public viewCtrl: ViewController,public touchId: TouchID) {
  }

  ionViewDidEnter() {
    this.verify();
  }

  verify(){

    this.touchId.verifyFingerprint('扫描指纹以解锁').then((res) => {
      this.viewCtrl.dismiss();
    }, (err) => {
      console.log(err);
      this.verify();
    });

  }
}
