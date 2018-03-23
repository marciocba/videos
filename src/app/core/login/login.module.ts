import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
//import { LoginComponent } from './login.component';
//import { SignInComponent } from './sign-in/sign-in.component';
//import { SignUpComponent } from './sign-up/sign-up.component';
//import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule//,FormsModule
  ],
  declarations: [//SignInComponent, SignUpComponent
    //,LoginComponent
  ],
  //exports:[FormsModule]
})
export class LoginModule { }
