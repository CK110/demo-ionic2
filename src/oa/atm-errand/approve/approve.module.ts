import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApprovePage } from './approve';

@NgModule({
  declarations: [
    ApprovePage,
  ],
  imports: [
    IonicPageModule.forChild(ApprovePage),
  ],
  exports: [
    ApprovePage
  ]
})
export class ApprovePageModule {}
