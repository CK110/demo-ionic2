import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DemoPage } from './demo';
import {ApprovehistoryModule} from "../../../components/approvehistory/approvehistory.module";

@NgModule({
  declarations: [
    DemoPage,
  ],
  imports: [
    IonicPageModule.forChild(DemoPage),
    ApprovehistoryModule
  ],
  exports: [
    DemoPage
  ]
})
export class DemoPageModule {}
