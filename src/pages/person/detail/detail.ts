import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {PhotoViewer} from "@ionic-native/photo-viewer";

/**
 * Generated class for the DetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  constructor(public navCtrl: NavController,private photoViewer: PhotoViewer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }


  /**
   * 查看图片
   */
  viewPhoto(pic:string){
    this.photoViewer.show(pic, '我的头像', {share: false});
  }

  test(){
    this.photoViewer.show('http://image.baidu.com/search/detail?ct=503316480&z=&tn=baiduimagedetail&ipn=d&word=%E5%BE%AE%E8%B7%9D%E6%91%84%E5%BD%B1&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=-1&cs=1193418232,3244632658&os=2252150389,2656357416&simid=3191816227,3872885336&pn=0&rn=1&di=120032462001&ln=1983&fr=&fmq=1480332039000_R_D&fm=detail&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&is=0,0&istype=2&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=0&objurl=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201408%2F30%2F20140830185456_Eijik.jpeg&rpstart=0&rpnum=0&adpicid=0&ctd=1500429400653^3_1265X629%1');
  }

}
