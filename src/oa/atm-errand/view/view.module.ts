import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AtmErrandViewPage } from './view';
import {ApprovehistoryModule} from "../../../components/approvehistory/approvehistory.module";

@NgModule({
  declarations: [
    AtmErrandViewPage,
  ],
  imports: [
    IonicPageModule.forChild(AtmErrandViewPage),
    ApprovehistoryModule
  ],
  exports: [
    AtmErrandViewPage
  ]
})
export class ViewPageModule {}
