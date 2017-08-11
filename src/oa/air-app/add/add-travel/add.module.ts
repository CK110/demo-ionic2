import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AirAppAddTravelPage } from './add';

@NgModule({
  declarations: [
    AirAppAddTravelPage,
  ],
  imports: [
    IonicPageModule.forChild(AirAppAddTravelPage),
  ],
  exports: [
    AirAppAddTravelPage
  ]
})
export class AirAppAddTravelModule {}
