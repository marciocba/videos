import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import {HttpModule} from '@angular/http';
//import { SafePipe } from '../safe.pipe';

//import { AuthenticationService } from './service/authentication.service';
//import { AuthGuard } from './service/auth.guard';


@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  declarations: [HeaderComponent, LoginComponent, NotFoundComponent],
  exports: [
    RouterModule,
    HeaderComponent
  ],
  providers:[
    //AuthenticationService,
    //AuthGuard
  ]
})
export class CoreModule { }
