import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _registerUrl="http://localhost:8080/signup";
  private _loginUrl="http://localhost:8080/login";
  constructor( private http:HttpClient, private _route:Router) { }

  registerUser(user:any) {
    return this.http.post<any>(this._registerUrl,user);
  }

  loginUser(user:any){
    return this.http.post<any>(this._loginUrl, user);
  }
  logoutUser(){
    localStorage.removeItem('Authorization');
    localStorage.removeItem('Role');
    this._route.navigate(['']);
  }
  loggedIn(){
    return !!localStorage.getItem('Authorization');
  }

}
