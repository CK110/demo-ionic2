import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AirAppApprovePage } from './approve';

@NgModule({
  declarations: [
    AirAppApprovePage,
  ],
  imports: [
    IonicPageModule.forChild(AirAppApprovePage),
  ],
  exports: [
    AirAppApprovePage
  ]
})
export class AirAppApprovePageModule {}
