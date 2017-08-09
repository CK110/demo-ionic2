import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {AlertController, Platform} from "ionic-angular";
import {Network} from "@ionic-native/network";
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {Observable} from "rxjs";
import {AppVersion} from "@ionic-native/app-version";
import {APK_DOWNLOAD, APK_VERSION_UPDATE, APP_DOWNLOAD} from "./config";
import { FileTransfer, FileTransferObject} from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { AppUpdate } from '@ionic-native/app-update';
import { Device } from '@ionic-native/device';


@Injectable()
export class NativeService{

  constructor(private platform: Platform,
              private network: Network,
              public alertCtrl: AlertController,
              private inAppBrowser: InAppBrowser,
              public appVersion:AppVersion,
              public file: File,
              private transfer: FileTransfer,
              public appUpdate: AppUpdate,
              private device: Device) {

  }

  /**
   * 是否真机环境
   */
  isMobile(): boolean {
    return this.platform.is('mobile') && !this.platform.is('mobileweb');
  }

  /**
   * 是否android真机环境
   */
  isAndroid(): boolean {
    return this.isMobile() && this.platform.is('android');
  }

  /**
   * 是否ios真机环境
   */
  isIos(): boolean {
    return this.isMobile() && (this.platform.is('ios') || this.platform.is('ipad') || this.platform.is('iphone'));
  }

  /**
   * 获取网络类型 如`unknown`, `ethernet`, `wifi`, `2g`, `3g`, `4g`, `cellular`, `none`
   */
  getNetworkType(): string {
    if (!this.isMobile()) {
      return 'wifi';
    }
    return this.network.type;
  }

  /**
   * 判断是否有网络
   */
  isConnecting(): boolean {
    return this.getNetworkType() != 'none';
  }

  /**
   * 检查app是否需要升级
   */
  detectionUpgrade(): void {
    //这里连接后台判断是否需要升级,不需要升级就return

    this.alertCtrl.create({
      title: '升级',
      subTitle: '发现新版本,是否立即升级？',
      buttons: [{text: '取消'},
        {
          text: '确定',
          handler: () => {
            this.downloadApp();
          }
        }
      ]
    }).present();

  }

  /**
   * 下载安装app
   */
  downloadApp(){
    if(this.isAndroid()){

      this.appUpdate.checkAppUpdate(APK_VERSION_UPDATE);

      // this.apkDowloadPress();


    }else {
      this.inAppBrowser.create(APP_DOWNLOAD,'_system')
    }
  }

  /**
   * 另一种apk更新方式
   * 1.File http://ionicframework.com/docs/native/file/
   * 2.Transfer http://ionicframework.com/docs/native/file-transfer/
   * 3.install https://github.com/weelion/phonegap-plugin-install
   */
  apkDowloadPress(){
    let alert = this.alertCtrl.create({
      title: '下载进度：0%',
      enableBackdropDismiss: false,
      buttons: ['后台下载']
    });
    alert.present();

    const fileTransfer: FileTransferObject = this.transfer.create();
    const apk = this.file.externalRootDirectory + 'android.apk'; //apk保存的目录

    fileTransfer.download(APK_DOWNLOAD, apk).then(() => {
      window['install'].install(apk.replace('file://', ''));
    });

    fileTransfer.onProgress((event: ProgressEvent) => {
      let num = Math.floor(event.loaded / event.total * 100);
      if (num === 100) {
        alert.dismiss();
      } else {
        let title = document.getElementsByClassName('alert-title')[0];
        title && (title.innerHTML = '下载进度：' + num + '%');
      }
    });
  }

  /**
   * 获得app版本号,如0.0.1
   * @description  对应/config.xml中version的值
   */
  getVersionNumber(): Observable<string> {
    return Observable.create(observer => {
      this.appVersion.getVersionNumber().then((value: string) => {
        observer.next(value);
      }).catch(err => {
        console.log('%cNativeService/' + 'getVersionNumber:' + err, 'color:#C41A16');
      });
    });
  }

  /**
   * 获取设备uuid
   * @returns {string}
   */
  getDeviceUUID():string{
    if(this.isMobile()){
      return this.device.uuid;
    }else {
      return "00000000000001"
    }
  }

}
