import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { NoticebarComponent } from './noticebar';

@NgModule({
  declarations: [
    NoticebarComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    NoticebarComponent
  ]
})
export class NoticebarModule {}
