import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AirAppViewPage } from './view';

@NgModule({
  declarations: [
    AirAppViewPage,
  ],
  imports: [
    IonicPageModule.forChild(AirAppViewPage),
  ],
  exports: [
    AirAppViewPage
  ]
})
export class AirAppViewPageModule {}
