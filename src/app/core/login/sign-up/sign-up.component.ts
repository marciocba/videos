import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/user.model';
import { UserService } from '../../../shared/user.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
// 
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user:any;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  message:String="";
  constructor(private userService: UserService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.user = {
      email: '',
      password: ''    
    }
    this.message='';
  }

  OnSubmit(form: NgForm) {
    //console.log(form.value);
    this.userService.registerUser(form.value)
      .subscribe((data: any) => {
        //console.log(data);
        this.resetForm(form);
        this.toastr.success('User registration successful');    
      },
      (err: HttpErrorResponse) => {
        console.log(err.error);
        this.toastr.error(err.error.message);
      });
  }

}
