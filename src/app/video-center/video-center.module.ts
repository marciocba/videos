import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoCenterRoutingModule } from './video-center-routing.module';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { VideoCenterComponent } from './video-center.component';

@NgModule({
  imports: [
    CommonModule,
    VideoCenterRoutingModule
  ],
  declarations: [VideoCenterComponent,VideoListComponent, VideoDetailComponent]
})
export class VideoCenterModule { }
