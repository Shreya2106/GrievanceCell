import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { EventService } from 'src/app/event.service';
@Component({
  selector: 'app-admin-manage-users-by-id',
  templateUrl: './admin-manage-users-by-id.component.html',
  styleUrls: ['./admin-manage-users-by-id.component.css']
})
export class AdminManageUsersByIdComponent implements OnInit {

  constructor( private _route:Router, private _service:EventService, private _activatedRoute:ActivatedRoute, public authService:AuthService) { }
  private _authtoken=localStorage.getItem('Authorization');

  public employeeDetailById:any=[];
  ngOnInit(): void {
    let id:any=this._activatedRoute.snapshot.paramMap.get('id');
    console.log(id);


    this._service.getAllUsers(this._authtoken).subscribe(
      res => {
        for(var item in res){
          var obj:any={};
          var role=res[item].role
          var userid=res[item].id;
          
          if(role==="ROLE_EMPLOYEE" && userid==id){
            obj["id"]=res[item].id;
            obj["username"]=res[item].username;
            this.employeeDetailById.push(obj);
          }
        }
        

      },
      err => console.log(err)


    )
  }
  hide = true;
  
  display1=true;
  updateEmployee()
  {
    this.display1 = !this.display1;
  }
  backToManageUserPage(){
      this._route.navigate(['adminmanageusers']);
  }


}
