import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';
import { EventService } from '../event.service';
import { LoginUserData } from '../login-user-data';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserData= new LoginUserData();
  constructor(private router: Router, private _auth:AuthService, private _service:EventService) { }
  ngOnInit(): void {
  }
  hide = true;
  // onClickSubmit(data: { role: string; }) {
  //   if(data.role == 'Customer')
  //   this.router.navigate(['/userhome']);
  //   if(data.role == 'Employee')
  //   this.router.navigate(['/employeehome']);
  //   if(data.role == 'Admin')
  //   this.router.navigate(['/adminhome']);
  //   }
  private role:any;
  loginUser(){
      //console.log(this.loginUserData);
      this._auth.loginUser(this.loginUserData).subscribe(
        res => {
          //console.log(res);
          localStorage.setItem('Authorization','Bearer '+res.jwt);
          this._service.getCurrentUser(localStorage.getItem('Authorization')).subscribe(
            res => {
              localStorage.setItem('Role',res.role);
              this.role = localStorage.getItem('Role');
                if(this.role==="ROLE_ADMIN"){
                  this.router.navigate(['adminhome']);
                }else if(this.role==="ROLE_USER"){
                  this.router.navigate(['userhome']);
                }else if(this.role==="ROLE_EMPLOYEE"){
                  this.router.navigate(['employeehome']);
                }else{
                  this.router.navigate(['']);
               }

            },
            err => console.log(err)


          )
          // this.role = localStorage.getItem('Role');
          // if(this.role==="ROLE_ADMIN"){
          //   this.router.navigate(['adminhome']);
          // }else if(this.role==="ROLE_USER"){
          //   this.router.navigate(['userhome']);
          // }else if(this.role==="ROLE_EMPLOYEE"){
          //   this.router.navigate(['employeehome']);
          // }else{
          //   this.router.navigate(['']);

          //}


        },
        err => {
          alert("Wrong UserName or Password! Try Again");
          this.router.navigate(['']);
        }
      )
  }
}
