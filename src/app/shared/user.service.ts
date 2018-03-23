import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from './user.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {
  //for this code see the file 'api-xhrbackend.ts
  //readonly rootUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }
  registerUser = function (user: any) {
    const body = {
      email: user.email,
      password: user.password         
    }
    console.log("codigo novo");
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' })
    return this.http.post('/api/admin/user/signup', body
    //return this.http.post(this.rootUrl + '/api/admin/user/signup', body
      //  , { headers: reqHeader } 
    );
  }

  //retorn body
  userAuthentication(user: any) {
    const body = {
      email: user.email,
      password: user.password         
    } 
       var reqHeader = new HttpHeaders({ 'No-Auth': 'True' })

       return this.http.post('/api/admin/user/login', body //, { headers: reqHeader }
      );
    //return this.http.post(this.rootUrl + '/api/admin/user/login', body, { headers: reqHeader } );
    
  }
  getOrders() {
    console.log("token" + localStorage.getItem('userToken'));
    let httpHeaders = new HttpHeaders()
      .set('Authorization', 'Bearer ' + localStorage.getItem('userToken'));
    /* let httpParams = new HttpParams()
                         .set('category', category)
                   .set('year', year);
     */
    //return this.http.get(this.rootUrl + '/api/orders' , { headers: httpHeaders }
    return this.http.get('/api/orders' , { headers: httpHeaders }
    );
  }

}
