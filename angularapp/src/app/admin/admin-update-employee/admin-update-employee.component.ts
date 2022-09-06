import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddEmployeeByAdmin } from 'src/app/add-employee-by-admin';
import { EventService } from 'src/app/event.service';
@Component({
  selector: 'app-admin-update-employee',
  templateUrl: './admin-update-employee.component.html',
  styleUrls: ['./admin-update-employee.component.css']
})
export class AdminUpdateEmployeeComponent implements OnInit {
  updateEmployeeByAdmin = new AddEmployeeByAdmin();
  constructor(private _route:Router, private _activatedRoute:ActivatedRoute, private _service:EventService) { }
  private _authtoken=localStorage.getItem('Authorization');
  public employeeDetailById:any=[];
  ngOnInit(): void {
    let id:any=this._activatedRoute.snapshot.paramMap.get('id');
    

    this._service.getAllUsers(this._authtoken).subscribe(



      res => {
        for(var item in res){
          var obj:any={};
          var role=res[item].role
          var userid=res[item].id;
          
          if(role==="ROLE_EMPLOYEE" && userid==id){
            obj["id"]=res[item].id;
            obj["email"]=res[item].email;
            obj["username"]=res[item].username;
            
            this.updateEmployeeByAdmin=obj;
          }
        }
        

      },
      err => console.log(err)


    )
  }
  hide=true;
  updateEmpByAdmin(){
    let id:any=this._activatedRoute.snapshot.paramMap.get('id');
    this._service.updateEmployeeById(id,this.updateEmployeeByAdmin,this._authtoken).subscribe(
      data=> {
        console.log("Data added sucessfully");
        this._route.navigate(['adminmanageusers']);
      },
      err=> {
        console.log("Error Occured");
        alert("Error Occurred");
      }
    )
    
  }
}
