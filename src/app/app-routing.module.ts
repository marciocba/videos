import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VideoCenterComponent } from './video-center/video-center.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  //{path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'videos',component:VideoCenterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
