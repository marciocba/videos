import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoRoutingModule } from './video-routing.module';
import { VideoComponent } from './video.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SafePipe } from '../safe.pipe';


@NgModule({
  imports: [
    VideoRoutingModule,
    CommonModule,HttpModule,FormsModule
  ],
  exports:[FormsModule],
  declarations: [VideoComponent, ListComponent, DetailComponent,SafePipe]
})
export class VideoModule { }
