import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { Router, NavigationEnd } from '@angular/router';
import { navigationLinks } from './navigation-links';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  activeLinks=navigationLinks;
  isLogged:boolean=false;

  constructor(private authentication: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
    this.router.events

      .subscribe(event => {
        //console.log(event);
        if (event instanceof NavigationEnd) {
          this.isLogged=this.authentication.isUserLoggedIn();
          //console.log(event.urlAfterRedirects);
          //console.log(navigationLinks);
          //console.log(this.activeLinks[0]);
        }
      })
  }
  logout(){
    this.authentication.logoutUser();//logout();
    this.isLogged=false
  }
  log() {
    console.log("getToken()" + this.authentication.getToken());
    console.log("local var" + localStorage.getItem("userToken"))
    console.log("getToken() and check authentication:" + this.authentication.getToken());
    if (this.authentication.isAuthenticated()) {

      console.log("getAccessToken()" + this.authentication.getAccessToken()["user"])
      let loggedInUser = this.authentication.getLoggedInUser();

      console.log("loged:" + this.authentication.getLoggedInUser()["user"]);
      console.log(loggedInUser["role"]);

      for (var key in loggedInUser) {
        var value = loggedInUser[key];
        console.log("prop:" + value)
      }

      if (!loggedInUser) {
        console.log("is logged com role:" + loggedInUser["role"]);

      }

      if (loggedInUser["role"] === "ADMIN") {
        console.log("admin");
      } else {
        console.log('Unauthorized to open link: ');

      }

    } else {
      console.log("Nao autenticado");

    }

  }
}
