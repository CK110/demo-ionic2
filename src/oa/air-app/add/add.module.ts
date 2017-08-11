import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AirAppAddPage } from './add';

@NgModule({
  declarations: [
    AirAppAddPage,
  ],
  imports: [
    IonicPageModule.forChild(AirAppAddPage),
  ],
  exports: [
    AirAppAddPage
  ]
})
export class AirAppAddPageModule {}
