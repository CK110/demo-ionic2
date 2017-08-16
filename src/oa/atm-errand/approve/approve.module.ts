import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AtmErrandApprovePage } from './approve';

@NgModule({
  declarations: [
    AtmErrandApprovePage,
  ],
  imports: [
    IonicPageModule.forChild(AtmErrandApprovePage),
  ],
  exports: [
    AtmErrandApprovePage
  ]
})
export class ApprovePageModule {}
