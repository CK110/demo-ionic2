import { Component } from '@angular/core';
import {ActionSheetController, IonicPage, NavController, ViewController} from 'ionic-angular';
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
              public camera: Camera,
              public actionSheetCtrl:ActionSheetController,
              public viewCtrl: ViewController) {
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

  uploadPhoto(){
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: '拍摄',
          handler: () => {
            console.log('使用相机');
            this.useCamera();
          }
        },{
          text: '从手机相册选择',
          handler: () => {
            console.log('使用本地相册');
            this.localPhotoAlbum();
          }
        },{
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('取消 clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  /**
   * 拍照
   */
  useCamera(){
    const options: CameraOptions = {
      //这些参数可能要配合着使用，比如选择了sourcetype是0，destinationtype要相应的设置
      quality: 100,                                            //相片质量0-100
      destinationType:this.camera.DestinationType.FILE_URI,    //返回类型：DATA_URL= 0，返回作为 base64 編碼字串。 FILE_URI=1，返回影像档的 URI。NATIVE_URI=2，返回图像本机URI (例如，資產庫)
      sourceType: this.camera.PictureSourceType.CAMERA,        //从哪里选择图片：PHOTOLIBRARY=0，相机拍照=1，SAVEDPHOTOALBUM=2。0和1其实都是本地图库
      allowEdit: false,                                        //在选择之前允许修改截图
      encodingType:this.camera.EncodingType.JPEG,                   //保存的图片格式： JPEG = 0, PNG = 1
      targetWidth: 200,                                        //照片宽度
      targetHeight: 200,                                       //照片高度
      mediaType:0,                                             //可选媒体类型：圖片=0，只允许选择图片將返回指定DestinationType的参数。 視頻格式=1，允许选择视频，最终返回 FILE_URI。ALLMEDIA= 2，允许所有媒体类型的选择。
      cameraDirection:0,                                       //枪后摄像头类型：Back= 0,Front-facing = 1
      saveToPhotoAlbum: true                                   //保存进手机相册
    }

    this.camera.getPicture(options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;

      console.log(base64Image);

      this.viewCtrl.dismiss();


    }, (err) => {
      console.log('Camera 错误');
    });
  }

  /**
   * 使用本地相册
   */
  localPhotoAlbum(){
    const options: CameraOptions = {
      //这些参数可能要配合着使用，比如选择了sourcetype是0，destinationtype要相应的设置
      quality: 100,                                            //相片质量0-100
      destinationType:this.camera.DestinationType.FILE_URI,    //返回类型：DATA_URL= 0，返回作为 base64 編碼字串。 FILE_URI=1，返回影像档的 URI。NATIVE_URI=2，返回图像本机URI (例如，資產庫)
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM, //从哪里选择图片：PHOTOLIBRARY=0，相机拍照=1，SAVEDPHOTOALBUM=2。0和1其实都是本地图库
      allowEdit: false,                                        //在选择之前允许修改截图
      encodingType:this.camera.EncodingType.JPEG,                   //保存的图片格式： JPEG = 0, PNG = 1
      targetWidth: 200,                                        //照片宽度
      targetHeight: 200,                                       //照片高度
      mediaType:0,                                             //可选媒体类型：圖片=0，只允许选择图片將返回指定DestinationType的参数。 視頻格式=1，允许选择视频，最终返回 FILE_URI。ALLMEDIA= 2，允许所有媒体类型的选择。
      cameraDirection:0,                                       //枪后摄像头类型：Back= 0,Front-facing = 1
      saveToPhotoAlbum: true                                   //保存进手机相册
    }

    this.camera.getPicture(options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;

      console.log(base64Image);

      this.viewCtrl.dismiss();
    }, (err) => {
      console.log('Camera 错误');
    });
  }
}
