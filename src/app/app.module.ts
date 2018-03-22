import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

//import { HomeComponent } from './home/home.component';
//import { VideoCenterComponent } from './video-center/video-center.component';
//import { VideoListComponent } from './video-list/video-list.component';
//import { VideoDetailComponent } from './video-detail/video-detail.component';
//import { SafePipe } from './safe.pipe';
import { HttpModule } from '@angular/http';
//import { LoginComponent } from './login/login.component';
//import { UserComponent } from './user/user.component';



@NgModule({
  declarations: [
    AppComponent,
//    HomeComponent,
//    VideoCenterComponent,
//    VideoListComponent,
//    VideoDetailComponent,
//    SafePipe,
//    LoginComponent,
//    UserComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    //FormsModule,HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
