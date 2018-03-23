import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

import { UserService } from '../../../shared/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  //token:string="token";
  isLoginError:Boolean=false;

 // constructor(){}
   constructor(private userService: UserService, private toastr: ToastrService,
  private router:Router) { }
 
  ngOnInit() {
  }
   //logins
  OnSubmit(form: NgForm) {
    //console.log(form.value);
     this.userService.userAuthentication(form.value)
      .subscribe((data: any) => {
        localStorage.setItem('userToken',data.token);
        this.router.navigate(['/home']);
        console.log()
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
   } 
}
