import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AirAppApprovePage } from './approve';
import {ApprovehistoryModule} from "../../../components/approvehistory/approvehistory.module";

@NgModule({
  declarations: [
    AirAppApprovePage,
  ],
  imports: [
    IonicPageModule.forChild(AirAppApprovePage),
    ApprovehistoryModule
  ],
  exports: [
    AirAppApprovePage
  ]
})
export class AirAppApprovePageModule {}
