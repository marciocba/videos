import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { AuthGuard } from './service/auth.guard';

//
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    children: [{ path: '', component: SignInComponent }]
  },
  {
    path: 'signup', component: LoginComponent,
    children: [{ path: '', component: SignUpComponent }]
  },

  {
    path: 'user',
    canActivateChild: [AuthGuard],
    loadChildren: '../user/user.module#UserModule'
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    loadChildren: '../home/home.module#HomeModule'
  },

   {
    path: 'videos',
    canActivate: [AuthGuard],
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
