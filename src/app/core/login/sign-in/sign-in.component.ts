import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

import { UserService } from '../../../shared/user.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../service/authentication.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  //token:string="token";
  //  tokenKey: string = "userToken"
  isLoginError: Boolean = false;
  invalidCredentialMsg: String;

  // constructor(){}
  constructor(private userService: UserService, private toastr: ToastrService,
    private router: Router,
    private authentication: AuthenticationService) { }

  ngOnInit() {
  }

  login(email, password) {
    this.authentication.login(email, password).then((data: any) => {
      // Success
    }
    )
    .catch(err => {
      console.log("Erro da promissa " + err["status"]);
      
     // for(var propertyName in err) {
     //   console.log("propertyName:"+propertyName+" value:"+err[propertyName])
     //}
     if (err["status"]=="401"){
      this.isLoginError=true;
      this.invalidCredentialMsg = "Usuario or senha incorreta. tente novamente"
     }
     if (err["status"]=="404"){
      this.isLoginError=true;
      this.invalidCredentialMsg = "error servidor. por favor tente mais tarde"
     }
    }
    );
  }

  OnSubmit(form: NgForm) {
    //console.log(form.value.email);

    /*     message: 'Auth sucessful',
        token: token,
        access_token: {
            user: user[0].password, 
            role: user[0].role
     */
    // console.log(form.value);
    //this.authentication.logoutUser();
    this.login(form.value.email, form.value.password);
     //    if (!this.authentication.isAuthenticated()){
    //      this.invalidCredentialMsg = 'Invalid Credentials. Try again.';
    //    }
    /* 
        .subscribe((data: any) => {
          if (data){
            localStorage.setItem(this.tokenKey,data.token);
            let url = '/home';//this.authentication.getRedirectUrl();
            console.log('Redirect Url:' + url);
            this.router.navigate([url]);
    
          }else{
            this.invalidCredentialMsg = 'Invalid Credentials. Try again.';
            console.log('Invalid Credentials. Try again.');
          }
          //this.token=data.token;
          
          //console.log(data);
          //this.toastr.success('User userAuthenticated successful');    
        },
        (err: HttpErrorResponse) => {
          //console.log(err.error);
          //this.token=err.error;
          this.isLoginError=true;
          this.toastr.error(err.error.message);
        });
         */

  }
}
