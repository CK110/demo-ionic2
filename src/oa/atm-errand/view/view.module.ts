import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AtmErrandViewPage } from './view';

@NgModule({
  declarations: [
    AtmErrandViewPage,
  ],
  imports: [
    IonicPageModule.forChild(AtmErrandViewPage),
  ],
  exports: [
    AtmErrandViewPage
  ]
})
export class ViewPageModule {}
