import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from './authentication.service';
import { ADMIN } from './roles';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authentication: AuthenticationService,private router: Router) { }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    let url: string = state.url;
    //console.log('Url:' + url);
    if (this.authentication.isUserLoggedIn()) {
      return true;
    }
    this.authentication.setRedirectUrl(url);
    this.router.navigate([this.authentication.getLoginUrl()]);
    return false;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    let loggedInUser = this.authentication.getLoggedInUser();
    let url: string = state.url;
    if (!loggedInUser) {
      this.authentication.setRedirectUrl(url);
      this.router.navigate([this.authentication.getLoginUrl()]);
      return false;
    }
    if (loggedInUser.role === ADMIN) {
      return true;
    } else {
      console.log('Unauthorized to open link: ' + state.url);
      this.authentication.setRedirectUrl(url);
      this.router.navigate([this.authentication.getLoginUrl()]);
      return false;
    }
  }
}
