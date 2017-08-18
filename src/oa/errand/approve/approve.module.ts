import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ErrandApprovePage } from './approve';

@NgModule({
  declarations: [
    ErrandApprovePage,
  ],
  imports: [
    IonicPageModule.forChild(ErrandApprovePage),
  ],
  exports: [
    ErrandApprovePage
  ]
})
export class ErrandApprovePageModule {}
