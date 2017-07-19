import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailPage } from './detail';
import {IonicImageViewerModule} from "ionic-img-viewer";

@NgModule({
  declarations: [
    DetailPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailPage),
    IonicImageViewerModule // fuck 为什么app.module.ts里面还要引用
  ],
  exports: [
    DetailPage
  ]
})
export class DetailPageModule {}
