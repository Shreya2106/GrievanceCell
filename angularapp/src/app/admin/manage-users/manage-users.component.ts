import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { EventService } from 'src/app/event.service';
@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {
  constructor( private _route:Router, private _service:EventService,public authService:AuthService) { }
  private _authtoken=localStorage.getItem('Authorization');
  public employeeDetails:any=[];
  ngOnInit(): void {

    this._service.getAllUsers(this._authtoken).subscribe(
      res => {
        for(var item in res){
          var obj:any={};
          var role=res[item].role
          
          if(role==="ROLE_EMPLOYEE"){
            obj["id"]=res[item].id;
            obj["username"]=res[item].username;
            this.employeeDetails.push(obj);
          }



        }
        


      },
      err => console.log(err)


    )
  }
  hide = true;
  display = false;
  addEmployee(){
    this.display = !this.display;
    
  }
  
  manageUsersById(id:any){
    
    this._route.navigate(['/adminmanageusersbyid',id]);
  }
  deleteEmployeeById(id:any){
    this._service.deleteEmployeeById(id,this._authtoken).subscribe(
      res => {
        console.log("deleted successfully")
        this.reloadCurrentRoute();
      },
      err => {
        alert("Employee Can't be deleted.Already assigned with one/more issues.");
        this._route.navigate(['adminmanageusers']);
      }


    )
  }
  reloadCurrentRoute() {
    let currentUrl = this._route.url;
    this._route.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this._route.navigate([currentUrl]);
    });
}
}
