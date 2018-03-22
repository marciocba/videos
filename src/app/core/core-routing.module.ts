import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
//import { VideoCenterModule } from '../video-center/video-center.module';
//
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'user',
    //canActivate: [AuthGuard],
    loadChildren: '../user/user.module#UserModule'
  },
  {
    path: 'home',
    //canActivate: [AuthGuard],
    loadChildren: '../home/home.module#HomeModule'
  },

   {
    path: 'videos',
    //canActivateChild: [AuthGuard],
    loadChildren: '../video/video.module#VideoModule'
  }, 
   {
    path: '**',
    component: NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
