import { Component, OnInit } from '@angular/core';
import {AddEmployeeByAdmin} from 'src/app/add-employee-by-admin';
import { Router } from '@angular/router';
import { NgServiceService } from 'src/app/ng-service.service';
import { EventService } from 'src/app/event.service';

@Component({
  selector: 'app-admin-add-employee',
  templateUrl: './admin-add-employee.component.html',
  styleUrls: ['./admin-add-employee.component.css']
})
export class AdminAddEmployeeComponent implements OnInit {
  private _authToken=localStorage.getItem('Authorization');
  addEmployeeByAdmin=new AddEmployeeByAdmin();
  constructor(private _route:Router, private _service:EventService) { }
  ngOnInit(): void {

  }
  hide=true;


  addEmployeesByAdmin(){
    this._service.addEmployee(this.addEmployeeByAdmin,this._authToken).subscribe(
      data=> {
        console.log("Data added sucessfully");
        this.reloadCurrentRoute();
      },
      err=> {
        console.log("Error Occured");
        alert("Error Occurred");
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
