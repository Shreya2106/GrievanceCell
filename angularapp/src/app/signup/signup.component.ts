import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterUserData } from 'src/app/register-user-data';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerUserData=new RegisterUserData();
  constructor(private _router: Router,private _auth:AuthService) { }
  ngOnInit(): void {
  }
  hide = true;
  // onClickSubmit(data: { role: string; }) {
  //   this.router.navigate(['/useraddissue']);
  //   }

    registerUser(){
      //console.log(this.registerUserData);
      this._auth.registerUser(this.registerUserData)
      .subscribe(
        res => {
          //console.log(res);
          this._router.navigate(['']);
        },
        err => {
          //console.log(err);
          //console.log(err.status);

          if(err.status===400){
            alert(err.error);
            this._router.navigate(['']);
          }
        }
      )
      //this._router.navigate(['/']);
    }
}
