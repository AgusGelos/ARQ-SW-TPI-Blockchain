import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInfo } from '../models/UserInfo';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  apiURL: string;

  constructor(private http: HttpClient) { 
    this.apiURL = '' ;
  }
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });
 

  login(userInfo: UserInfo){     
    return this.http
    .post(
      this.apiURL,
      { userInfo},
      { headers: this.headers }
    )
  }

  
  login1(email:string , passwd: string){     
    return this.http
    .post(
      this.apiURL,
      { email, passwd},
      { headers: this.headers }
    )
  }

  obtenerToken(): string {
    return localStorage.getItem("token");
  }

  obtenerExpiracionToken(): string {
    return localStorage.getItem("tokenExpiration");
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("tokenExpiration");
  }

  estaLogueado(): boolean {

    var exp = this.obtenerExpiracionToken();

    if (!exp) {
      // el token no existe
      return false;
    }

    var now = new Date().getTime();
    var dateExp = new Date(exp);

    if (now >= dateExp.getTime()) {
      // ya expiró el token
      localStorage.removeItem('token');
      localStorage.removeItem('tokenExpiration');
      return false;
    } else {
      return true;
    }
    
  }

}
