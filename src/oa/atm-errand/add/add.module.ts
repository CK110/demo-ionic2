import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AtmErrandAddPage } from './add';

@NgModule({
  declarations: [
    AtmErrandAddPage,
  ],
  imports: [
    IonicPageModule.forChild(AtmErrandAddPage),
  ],
  exports: [
    AtmErrandAddPage
  ]
})
export class AtmErrandAddPageModule {}
