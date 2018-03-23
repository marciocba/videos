import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../shared/user.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { ADMIN, USER } from './roles';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class AuthenticationService {

  private redirectUrl: string = '/home';
  private loginUrl: string = '/login';
  private isloggedIn: boolean = false;
  private loggedInUser = null;
  private ErrorMsg: string = null;
  tokenKey: string = "userToken"

  constructor(private router: Router, private http: HttpClient) { }
  /* token = {
      message: 'Auth sucessful',
      token: token,
      access_token: {
          user: user[0].username, 
          role: user[0].role
      }
    }; */

  login(username: string, password: string) {

    const body = {
      email: username,
      password: password
    }

    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    //api/admin prefix is added from api file
    return this.http.post('/api/admin/user/login', body)
      .subscribe(
        (data: any) => {
          if (data) {
            this.setToken(data);
            this.router.navigate(['home']);
            this.isloggedIn = true;
            this.loggedInUser = data.access_token;
       
            //this.router.navigate(['admin', 'dashboard']);

            //let url = '/home';//this.authentication.getRedirectUrl();
            //console.log('Redirect Url:' + url);
            //this.router.navigate([url]);
          } else {
            this.isloggedIn = false;
          }
          //this.toastr.success('User userAuthenticated successful');    
        },
        (err: HttpErrorResponse) => {
          console.log(err.error);
          this.SetErrorMsg(err.error);
          this.router.navigate([this.loginUrl]);
          this.isloggedIn = false;
          this.loggedInUser = null;
          return err.error;
        }
      );
  }
  SetErrorMsg(msg: string) {
    this.ErrorMsg = msg;
  }
  getErrorMsg(): string {
    return this.ErrorMsg;
  }
  isUserLoggedIn(): boolean {
    return this.isloggedIn;
  }
  getRedirectUrl(): string {
    return this.redirectUrl;
  }
  setRedirectUrl(url: string): void {
    this.redirectUrl = url;
  }
  getLoginUrl(): string {
    return this.loginUrl;
  }
  getLoggedInUser(): any {
    return this.loggedInUser;
  }
  logoutUser(): void {
    this.isloggedIn = false;
    this.removeToken();
    this.router.navigate(['login']);

  }

  getToken() {
    return JSON.parse(localStorage.getItem(this.tokenKey));
  }

  setToken(token) {
    localStorage.setItem(this.tokenKey, JSON.stringify(token));
  }

  getAccessToken() {
    return JSON.parse(localStorage.getItem(this.tokenKey))['access_token'];
  }

  isAuthenticated() {
    let token = localStorage.getItem(this.tokenKey);

    if (token) {
      return true;
    }
    else {
      return false;
    }
  }

  removeToken() {
    localStorage.removeItem(this.tokenKey);
  }

}
