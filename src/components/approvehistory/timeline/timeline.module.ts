import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import {NzTimelineItemComponent} from "./timeline-item.component";
import {NzTimelineComponent} from "./timeline.component";

@NgModule({
  declarations: [ NzTimelineItemComponent, NzTimelineComponent ],

  imports: [
    IonicModule,
  ],
  exports: [
    NzTimelineItemComponent,NzTimelineComponent
  ]
})
export class TimelineComponentModule {}
