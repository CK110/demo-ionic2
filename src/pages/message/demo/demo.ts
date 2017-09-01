import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';
import {DatePicker} from "@ionic-native/date-picker";
import {AlertController, Events} from "ionic-angular";
import {Http} from "@angular/http";
import {Device} from "@ionic-native/device";
import {EmailComposer} from "@ionic-native/email-composer";
import { Geolocation } from '@ionic-native/geolocation';
import {HttpClient} from "../../../providers/http-client";
import {INDEX_LIST} from "../../../api/api";
declare var navigator;


@IonicPage()
@Component({
  selector: 'page-demo',
  templateUrl: 'demo.html',
})
export class DemoPage {
  items: string[];

  username:string;

  NativeDate:any;
  htmlDate:any;

  message:any; //获得的 message

  indexList:any[];


  constructor(private datePicker: DatePicker,
              public http:Http,
              public events:Events,
              public alertCtrl: AlertController,
              public device:Device,
              public emailComposer:EmailComposer,
              public geolocation: Geolocation,public httpClient:HttpClient) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DemoPage');

    this.getIndexList();
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
        title: '位置信息native',
        subTitle: JSON.stringify(res),
        message:JSON.stringify(this.geolocation),
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

    navigator.geolocation.getCurrentPosition((res) => {

      this.alertCtrl.create({
        title: '位置信息baidu',
        subTitle: JSON.stringify(res),
        message:JSON.stringify(navigator),
        buttons: ['OK']
      }).present();
    },(error) => {
      this.alertCtrl.create({
        title: '错误',
        subTitle: JSON.stringify(error),
        buttons: ['OK']
      }).present();
    });

  }




  // 审批历史demo数据
  historyTwo:any[] = [
    {
      "formid": "4643095917849",
      "sortno": "1",
      "apvsignname": "杨锐",
      "apvnote": "哈哈刷卡回声嘹亮has啦",
      "processname": "公假流程",
      "apvid": "136433743329602",
      "taskname": "一级部门经理审批",
      "apvpassed": "Y",
      "apvsign": "ruiyang",
      "apvdate": "2014-08-11 16:27"
    },
    {
      "formid": "4643095917849",
      "sortno": "2",
      "apvsignname": "杨锐",
      "apvnote": "哈哈刷卡回声嘹亮has啦",
      "processname": "公假流程",
      "apvid": "193682926431599",
      "taskname": "分公司经理或部门总监审批",
      "apvpassed": "Y",
      "apvsign": "ruiyang",
      "apvdate": "2014-08-11 16:28"
    },
    {
      "formid": "4643095917849",
      "sortno": "2",
      "apvsignname": "杨锐",
      "apvnote": "",
      "processname": "公假流程",
      "apvid": "193682926431599",
      "taskname": "分公司经理或部门总监审批",
      "apvpassed": "Y",
      "apvsign": "ruiyang",
      "apvdate": ""
    },
  ];

  historyTwoEnd =[
    {
      "formid": "4643095917849",
      "sortno": "2",
      "apvsignname": "杨锐",
      "apvnote": "哈哈刷卡回声嘹亮has啦",
      "processname": "公假流程",
      "apvid": "193682926431599",
      "taskname": "分公司经理或部门总监审批",
      "apvpassed": "Y",
      "apvsign": "ruiyang",
      "apvdate": "2014-08-11 16:28"
    },
    {
      "formid": "4643095917849",
      "sortno": "2",
      "apvsignname": "姗姗",
      "apvnote": "哈哈刷卡回声嘹亮has啦",
      "processname": "公假流程",
      "apvid": "193682926431599",
      "taskname": "财务审批",
      "apvpassed": "Y",
      "apvsign": "ruiyang",
      "apvdate": "2014-08-11 16:28"
    },
    {
      "formid": "4643095917849",
      "sortno": "2",
      "apvsignname": "仲程",
      "apvnote": "哈哈刷卡回声嘹亮has啦",
      "processname": "公假流程",
      "apvid": "193682926431599",
      "taskname": "总裁审批",
      "apvpassed": "Y",
      "apvsign": "ruiyang",
      "apvdate": "2014-08-11 16:28"
    },
  ];


  historyMore=[
    {
      "formid": "4643095917849",
      "sortno": "1",
      "apvsignname": "杨锐",
      "apvnote": "哈哈刷卡回声嘹亮has啦",
      "processname": "公假流程",
      "apvid": "136433743329602",
      "taskname": "一级部门经理审批",
      "apvpassed": "Y",
      "apvsign": "ruiyang",
      "apvdate": "2014-08-11 16:27"
    },
    {
      "formid": "4643095917849",
      "sortno": "2",
      "apvsignname": "杨锐",
      "apvnote": "哈哈刷卡回声嘹亮has啦",
      "processname": "公假流程",
      "apvid": "193682926431599",
      "taskname": "分公司经理或部门总监审批",
      "apvpassed": "Y",
      "apvsign": "ruiyang",
      "apvdate": "2014-08-11 16:28"
    },
    {
      "formid": "4643095917849",
      "sortno": "2",
      "apvsignname": "杨锐",
      "apvnote": "哈哈刷卡回声嘹亮has啦",
      "processname": "公假流程",
      "apvid": "193682926431599",
      "taskname": "分公司经理或部门总监审批",
      "apvpassed": "Y",
      "apvsign": "ruiyang",
      "apvdate": "2014-08-11 16:28"
    },
    {
      "formid": "4643095917849",
      "sortno": "2",
      "apvsignname": "杨锐",
      "apvnote": "哈哈刷卡回声嘹亮has啦",
      "processname": "公假流程",
      "apvid": "193682926431599",
      "taskname": "分公司经理或部门总监审批",
      "apvpassed": "Y",
      "apvsign": "ruiyang",
      "apvdate": "2014-08-11 16:28"
    },
    {
      "formid": "4643095917849",
      "sortno": "2",
      "apvsignname": "姗姗",
      "apvnote": "",
      "processname": "公假流程",
      "apvid": "193682926431599",
      "taskname": "财务审批",
      "apvpassed": "Y",
      "apvsign": "ruiyang",
      "apvdate": ""
    },
  ];


  historyMoreEnd=[
    {
      "formid": "4643095917849",
      "sortno": "1",
      "apvsignname": "杨锐",
      "apvnote": "哈哈刷卡回声嘹亮has啦",
      "processname": "公假流程",
      "apvid": "136433743329602",
      "taskname": "一级部门经理审批",
      "apvpassed": "Y",
      "apvsign": "ruiyang",
      "apvdate": "2014-08-11 16:27"
    },
    {
      "formid": "4643095917849",
      "sortno": "2",
      "apvsignname": "杨锐",
      "apvnote": "哈哈刷卡回声嘹亮has啦",
      "processname": "公假流程",
      "apvid": "193682926431599",
      "taskname": "分公司经理或部门总监审批",
      "apvpassed": "Y",
      "apvsign": "ruiyang",
      "apvdate": "2014-08-11 16:28"
    },
    {
      "formid": "4643095917849",
      "sortno": "2",
      "apvsignname": "杨锐",
      "apvnote": "哈哈刷卡回声嘹亮has啦",
      "processname": "公假流程",
      "apvid": "193682926431599",
      "taskname": "分公司经理或部门总监审批",
      "apvpassed": "Y",
      "apvsign": "ruiyang",
      "apvdate": "2014-08-11 16:28"
    },
    {
      "formid": "4643095917849",
      "sortno": "2",
      "apvsignname": "杨锐",
      "apvnote": "哈哈刷卡回声嘹亮has啦",
      "processname": "公假流程",
      "apvid": "193682926431599",
      "taskname": "分公司经理或部门总监审批",
      "apvpassed": "Y",
      "apvsign": "ruiyang",
      "apvdate": "2014-08-11 16:28"
    },
    {
      "formid": "4643095917849",
      "sortno": "2",
      "apvsignname": "姗姗",
      "apvnote": "哈哈刷卡回声嘹亮has啦",
      "processname": "公假流程",
      "apvid": "193682926431599",
      "taskname": "财务审批",
      "apvpassed": "Y",
      "apvsign": "ruiyang",
      "apvdate": "2014-08-11 16:28"
    },
    {
      "formid": "4643095917849",
      "sortno": "2",
      "apvsignname": "仲程",
      "apvnote": "哈哈刷卡回声嘹亮has啦",
      "processname": "公假流程",
      "apvid": "193682926431599",
      "taskname": "总裁审批",
      "apvpassed": "Y",
      "apvsign": "ruiyang",
      "apvdate": "2014-08-11 16:28"
    },
  ];


  getIndexList(){
    this.httpClient.post(INDEX_LIST).subscribe((res)=>{
      this.indexList= res.json()['contacts'];
    })
  }
}
