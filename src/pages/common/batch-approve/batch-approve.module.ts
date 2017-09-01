import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BatchApprovePage } from './batch-approve';

@NgModule({
  declarations: [
    BatchApprovePage,
  ],
  imports: [
    IonicPageModule.forChild(BatchApprovePage),
  ],
  exports: [
    BatchApprovePage
  ]
})
export class BatchApprovePageModule {}
