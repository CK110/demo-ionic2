import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LockScreenPage } from './lock-screen';

@NgModule({
  declarations: [
    LockScreenPage,
  ],
  imports: [
    IonicPageModule.forChild(LockScreenPage),
  ],
  exports: [
    LockScreenPage
  ]
})
export class LockScreenPageModule {}
