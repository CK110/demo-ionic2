import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AtmErrandApprovePage } from './approve';
import {ApprovehistoryModule} from "../../../components/approvehistory/approvehistory.module";

@NgModule({
  declarations: [
    AtmErrandApprovePage,
  ],
  imports: [
    IonicPageModule.forChild(AtmErrandApprovePage),
    ApprovehistoryModule
  ],
  exports: [
    AtmErrandApprovePage
  ]
})
export class AtmErrandApprovePageModule {}
