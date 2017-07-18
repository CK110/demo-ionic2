import { Component } from '@angular/core';
import {ActionSheetController, IonicPage, NavController} from 'ionic-angular';
import {AppAvailability} from "@ionic-native/app-availability";
import {NativeService} from "../../../providers/native-service";
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {CallNumber} from "@ionic-native/call-number";


@IonicPage()
@Component({
  selector: 'page-company',
  templateUrl: 'company.html',
})
export class CompanyPage {
  // 百度 高德 谷歌地图 腾讯

  constructor(public navCtrl: NavController,
              public actionSheetCtrl: ActionSheetController,
              public appAvailability:AppAvailability,
              public nativeService:NativeService,
              public iab:InAppBrowser,
              public callNumber:CallNumber) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompanyPage');
  }

  callMap(destination:string){

    this.getAvaMapsURI(destination).then((ava_maps)=>{
      let map_buttons = [];

      ava_maps.forEach((val)=>{
        map_buttons.push({
          text:val.text,
          handler: () => {
            console.log(val.text);
            this.iab.create(val.uri,'_system')
          }
        })
      })

      map_buttons.push({
        text: '取消',
        role: 'cancel',
        handler: () => {
          console.log('取消');
        }
      })

      let actionSheet = this.actionSheetCtrl.create({
        buttons: map_buttons
      });
      actionSheet.present();

    });


  }

  /**
   * 检查本地手机安装过的地图类应用
   */
  async getAvaMapsURI(address:string){
    let maps =[];

    // ios平台
    if(this.nativeService.isIos()){

      await this.appAvailability.check('http://maps.apple.com/').then(
        (yes: boolean)=>{
          maps.push(
            {
              text: '用iphone自带地图导航',
              uri:'http://maps.apple.com/?daddr='+address
            },
          )
        },
        (no: string) => console.log('未安装IOS自带地图APP')
      )

      await this.appAvailability.check('baidumap://').then(
        (yes: boolean)=>{
          maps.push(
            {
              text: '用百度地图导航',
              uri:'baidumap://map/geocoder?address='+address+'&src=com.zjft.oa'
            },
          )
        },
        (no: string) => console.log('未安装IOS百度地图APP')
      )

      await this.appAvailability.check('iosamap://').then(
        (yes: boolean) => {
          maps.push(
            {
              text: '用高德地图导航',
              uri:'iosamap://path?sourceApplication=com.zjft.oa&sid=BGVIS1&did=BGVIS2&dname='+address+'&dev=0&t=0'
            },
          )
        },
        (no: string) => console.log('未安装IOS高德地图APP')
      )

      await this.appAvailability.check('comgooglemaps://').then(
        (yes: boolean)=>{
          maps.push(
            {
              text: '用谷歌地图导航',
              uri:'comgooglemaps://?daddr='+address+'&directionsmode=transit'
            },
          )
        },
        (no: string) => console.log('未安装IOS谷歌地图APP')
      )

    }

    //安卓平台
    if(this.nativeService.isAndroid()){

      await this.appAvailability.check('com.baidu.BaiduMap').then(
        (yes: boolean)=>{
          maps.push(
            {
              text: '用百度地图导航',
              uri:'bdapp://map/geocoder?src=openApiDemo&address='+address
            },
          )
        },
        (no: string) => console.log('未安装Android百度地图APP')
      )

      await this.appAvailability.check('com.autonavi.minimap').then(
        (yes: boolean)=>{
          maps.push(
            {
              text: '用高德地图导航',
              uri:'amapuri://route/plan/?src=openApiDemo&address='+address
            },
          )
        },
        (no: string) => console.log('未安装Android高德地图APP')
      )

      await this.appAvailability.check('com.google.android.apps.maps').then(
        (yes: boolean)=>{
          maps.push(
            {
              text: '用谷歌地图导航',
              uri:''
            },
          )
        },
        (no: string) => console.log('未安装Android谷歌地图APP')
      )
    }

    // 本机无可选地图，使用百度网页地图
    if(maps.length === 0){
      maps.push({
        text:'用百度网页地图',
        uri:'http://api.map.baidu.com/geocoder?address='+address+'&output=html&src=com.zjft.oa'
      })
    }

    console.log('可用的本机地图'+ JSON.stringify(maps));
    return maps;

  }


  /**
   * 打电话
   */
  call(number:string){
    this.callNumber.callNumber(number, true)
      .then(() => console.log('拨打电话:'+number))
      .catch(() => console.log('拨打电话catch异常:'+number+''));
  }
}
