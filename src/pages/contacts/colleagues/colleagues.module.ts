import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ColleaguesPage } from './colleagues';

@NgModule({
  declarations: [
    ColleaguesPage,
  ],
  imports: [
    IonicPageModule.forChild(ColleaguesPage),
  ],
  exports: [
    ColleaguesPage
  ]
})
export class ColleaguesPageModule {}
