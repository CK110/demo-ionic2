import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AirAppViewPage } from './view';
import {ApprovehistoryModule} from "../../../components/approvehistory/approvehistory.module";

@NgModule({
  declarations: [
    AirAppViewPage,
  ],
  imports: [
    IonicPageModule.forChild(AirAppViewPage),
    ApprovehistoryModule
  ],
  exports: [
    AirAppViewPage
  ]
})
export class AirAppViewPageModule {}
