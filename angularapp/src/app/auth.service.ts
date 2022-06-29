import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _registerUrl="https://8080-dadbddafcedfaaeabaacaefaddadcafda.examlyiopb.examly.io/signup";
  private _loginUrl="https://8080-dadbddafcedfaaeabaacaefaddadcafda.examlyiopb.examly.io/login";
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
