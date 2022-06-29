import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/event.service';
@Component({
  selector: 'app-admin-edit-status',
  templateUrl: './admin-edit-status.component.html',
  styleUrls: ['./admin-edit-status.component.css']
})
export class AdminEditStatusComponent implements OnInit {
  constructor(private _route:Router, private _activatedRoute:ActivatedRoute, private _service:EventService) { }
  private _authtoken=localStorage.getItem('Authorization');
  public empdetails:any=[];
  public issueId:any;
  ngOnInit(): void {
    let id:any=this._activatedRoute.snapshot.paramMap.get('id');
    this.issueId=id;
    this._service.getAllUsers(this._authtoken).subscribe(
      res => {
        for(let i  in res){
          if(res[i]['role']==='ROLE_EMPLOYEE'){
            this.empdetails.push(res[i]);
          }

        }


      },
      err => {
        console.log(err);

      }
    )
  }
  backtoadminhome(){
      this._route.navigate(['adminhome']);
  }
  public assignedDeveloper={
    "resolvedBy":{
      "email":""
  }
  }
  assignDeveloperForEachIssue(){
      this._service.mapComplaintByAdmin(this.issueId,this.assignedDeveloper,this._authtoken).subscribe(
        res => {
          this._route.navigate(['adminhome']);

        },
        err => {
          console.log(err);

        }
      )
  }
}
