import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, ToastController, ViewController} from 'ionic-angular';
import {HttpClient} from "../../../providers/http-client";
import {ERRAND_APPROVE_BATCH_SUBMIT} from "../../../api/api";

/**
 * Generated class for the BatchApprovePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-batch-approve',
  templateUrl: 'batch-approve.html',
})
export class BatchApprovePage {

  private list:any[]


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private httpClient:HttpClient,
              private toastCtrl:ToastController,
              private alertCtrl:AlertController,
              private viewCtrl:ViewController) {

    console.log( navParams.get('param'));
    this.list = navParams.get('param');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BatchApprovePage');
  }

   batchSubmit(){
    let result:any[]=[]
     this.list.forEach( async val=>{
       await this.httpClient.post(ERRAND_APPROVE_BATCH_SUBMIT,val).map(res=>res.json()).subscribe(res=>{
          result.push(res)
        }
      )
    })

    this.viewCtrl.dismiss({type:1});

  }

  dismiss(){
    this.viewCtrl.dismiss({type:2});
  }

}
