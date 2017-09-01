import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ErrandApprovePage } from './approve';
import {ApprovehistoryModule} from "../../../components/approvehistory/approvehistory.module";

@NgModule({
  declarations: [
    ErrandApprovePage,
  ],
  imports: [
    IonicPageModule.forChild(ErrandApprovePage),
    ApprovehistoryModule
  ],
  exports: [
    ErrandApprovePage
  ]
})
export class ErrandApprovePageModule {}
