import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DemoPage } from './demo';
import {ApprovehistoryModule} from "../../../components/approvehistory/approvehistory.module";
import {IndexListComponentModule} from "../../../components/contract/index-list.module";

@NgModule({
  declarations: [
    DemoPage,
  ],
  imports: [
    IonicPageModule.forChild(DemoPage),
    ApprovehistoryModule,
    IndexListComponentModule
  ],
  exports: [
    DemoPage
  ]
})
export class DemoPageModule {}
