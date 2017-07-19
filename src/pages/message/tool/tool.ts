import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import {BarcodeScanner} from "@ionic-native/barcode-scanner";
import {InAppBrowser} from "@ionic-native/in-app-browser";
import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-tool',
  templateUrl: 'tool.html',
})
export class ToolPage {

  constructor(public navCtrl: NavController,
              public barcodeScanner: BarcodeScanner,
              public iab:InAppBrowser,
              public camera: Camera) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ToolPage');
  }

  /**
   * 二维码
   *
   * {"cancelled":0,"text":"http://weixin.qq.com/r/6HUvK5-EKVdVKdtIbyBs","format":"QR_CODE"}
   * {"cancelled":0,"text":"https://qr.alipay.com/a6x08383eznidvpqxwx8x98","format":"QR_CODE"}
   */
  qrcode(){
    this.barcodeScanner.scan().then((barcodeData) => {
      if (barcodeData.cancelled) {
        console.log("User cancelled the action!");
        return false;
      }
      console.log("二维码扫描成功"+JSON.stringify(barcodeData));
      this.iab.create(barcodeData.text,'_system');
    }, (err) => {
      console.log(err);
    });
  }


  /**
   * 拍照
   */
  camera(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL, // base64
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      let base64Image = 'data:image/jpeg;base64,' + imageData;

      console.log(base64Image);
    }, (err) => {
      // Handle error
    });


  }

}
