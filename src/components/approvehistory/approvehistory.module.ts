import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ApprovehistoryComponent } from './approvehistory';
import {TimelineComponentModule} from "./timeline/timeline.module";
import {ApproveContentComponent} from "./approvehistory-content";

@NgModule({
  declarations: [
    ApprovehistoryComponent,
    ApproveContentComponent
  ],
  imports: [
    IonicModule,
    TimelineComponentModule
  ],
  exports: [
    ApprovehistoryComponent
  ]
})
export class ApprovehistoryModule {}
