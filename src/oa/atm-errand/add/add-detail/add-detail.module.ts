import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AtmErrandAddDetailPage } from './add-detail';

@NgModule({
  declarations: [
    AtmErrandAddDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(AtmErrandAddDetailPage),
  ],
  exports: [
    AtmErrandAddDetailPage
  ]
})
export class AtmErrandAddDetailPageModule {}
