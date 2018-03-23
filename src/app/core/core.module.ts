import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
//import {HttpModule} from '@angular/http';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { ToastrModule } from 'ngx-toastr';
import { UserService } from '../shared/user.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { XHRBackend } from '@angular/http';
import { ApiXHRBackend } from '../shared/api-xhrbackend';

//import { AuthenticationService } from './service/authentication.service';
//import { AuthGuard } from './service/auth.guard';


@NgModule({
  imports: [
    CommonModule,FormsModule,
    CoreRoutingModule,ToastrModule.forRoot(),HttpClientModule,
    BrowserAnimationsModule
  ],
  declarations: [HeaderComponent, LoginComponent, NotFoundComponent, SignInComponent, SignUpComponent],
  exports: [
    RouterModule,
    HeaderComponent,
    FormsModule
  ],
  providers:[
    UserService,
    { provide: XHRBackend, useClass: ApiXHRBackend }
    //AuthenticationService,
    //AuthGuard
  ]
})
export class CoreModule { }
