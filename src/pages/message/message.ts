import { Component } from '@angular/core';
import {UserData} from "../../providers/user-data";
import {DatePicker} from "@ionic-native/date-picker";
import {AlertController, Events, PopoverController} from "ionic-angular";
import {ToolPage} from "./tool/tool";
import {Http} from "@angular/http";
import {Device} from "@ionic-native/device";
import {EmailComposer} from "@ionic-native/email-composer";
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {

  items: string[];

  username:string;

  NativeDate:any;
  htmlDate:any;

  badgeNumber:number=0;

  constructor(private userData:UserData,
              private datePicker: DatePicker,
              public popoverCtrl: PopoverController,
              public http:Http,
              public events:Events,
              public alertCtrl: AlertController,
              public device:Device,
              public emailComposer:EmailComposer,
              public geolocation: Geolocation) {

    this.userData.getUsername().then((username)=>{
      this.username = username;
    });

  }

  onClick(){

      this.datePicker.show({
        date: new Date(),
        mode: 'date',
        androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
      }).then(date => {
        console.log('Got date: ', date);
        this.NativeDate = date
        },
        err => console.log('Error occurred while getting date: ', err)
      );

  }

  popPage(myEvent){
    this.popoverCtrl.create(ToolPage).present({ev: myEvent});
  }

  /**
   * 增加消息badge
   */
  incrementBadge(){
    this.badgeNumber = this.badgeNumber+1;
    console.log(this.badgeNumber);
    this.events.publish('tabs-tab1-page:badge-update',this.badgeNumber);

  }

  /**
   * 减少消息badge
   */
  decrementBadge(){
    console.log(this.badgeNumber);
    if(this.badgeNumber >0){
      this.badgeNumber = this.badgeNumber-1;
      this.events.publish('tabs-tab1-page:badge-update',this.badgeNumber);
    }
  }

  getDeviceInfo(){

    const deviceInfo={
      cordova:this.device.cordova,
      model:this.device.model, //返回设备型号或产品的名称,该值由设备制造商设置，并且可能在同一产品的版本中不同
      platform:this.device.platform,
      uuid:this.device.uuid,   // 获取设备的通用唯一标识符（UUID）
      version:this.device.version, // 获取操作系统版本
      manufacturer:this.device.manufacturer, //获取设备的制造商
      isVirtual:this.device.isVirtual,
      serial:this.device.serial //获取设备硬件序列号
    }

    this.alertCtrl.create({
      title: '设备信息!',
      subTitle: JSON.stringify(deviceInfo),
      buttons: ['OK']
    }).present();
  }

  sendMail(){
    // isAvailable 不是必须，cordova插件底层做了异常处理
    // this.emailComposer.isAvailable().then(
    //   () =>{
    //     console.log('本手机邮件客户端可用')
    //     this.emailComposer.open( {
    //       to: 'kaichen@zjft.com', // 收件人
    //       cc: 'kaichen1@zjft.com', //  抄送
    //       bcc: ['kaichen2@zjft.com', 'kaichen3@zjft.com'], // 密送
    //       subject: 'xxxxxxx提醒', // 主题
    //       body: 'How are you? Nice greetings from Leipzig', // 内容
    //       isHtml: true
    //     });
    //   },
    //
    //   () => {
    //     console.log('本手机未安装邮件客户端或者邮件客户端没有设置基本用户信息')
    //     this.alertCtrl.create({
    //       title: '打开邮件失败!',
    //       subTitle: '本手机未安装邮件客户端或者邮件客户端没有设置基本用户信息',
    //       buttons: ['OK']
    //     }).present();
    //   }
    // );

    this.emailComposer.open( {
      to: 'kaichen@zjft.com', // 收件人
      cc: 'kaichen1@zjft.com', //  抄送
      bcc: ['kaichen2@zjft.com', 'kaichen3@zjft.com'], // 密送
      subject: 'xxxxxxx提醒', // 主题
      body: 'How are you? Nice greetings from Leipzig', // 内容
      isHtml: true
    });
  }

  /**
   * 获取当前地理信息
   */
  getGeoLocation(){
    this.geolocation.getCurrentPosition().then((res) => {
      this.alertCtrl.create({
        title: '位置信息',
        subTitle: JSON.stringify(res),
        buttons: ['OK']
      }).present();
    }).catch((error) => {
      console.log('获取地理位置信息失败:', error);
    });

  }

  getGeoLationByBaidu(){
    // 进行定位
    // baidumap_location.getCurrentPosition((res) => {
    //   this.alertCtrl.create({
    //     title: '位置信息',
    //     subTitle: JSON.stringify(res),
    //     buttons: ['OK']
    //   }).present();
    // },(error) => {
    // });
  }

}
