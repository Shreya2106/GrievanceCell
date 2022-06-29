import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { EventService } from 'src/app/event.service';

@Component({
  selector: 'app-solved-issue',
  templateUrl: './employee-solved-issue.component.html',
  styleUrls: ['./employee-solved-issue.component.css']
})
export class EmployeeSolvedIssueComponent implements OnInit {

  public allComplaintsByEmployee=[];
  public currentUser:any;
  public totalIssue=0;
  public activeIssue=0;
  public solvedIssue=0;
  constructor(private _route:Router,public authService:AuthService,private _service:EventService) { }
  private _authtoken=localStorage.getItem('Authorization');
  ngOnInit(): void {
    this._service.getComplaintByEmployee(this._authtoken).subscribe(
      res => {
        //console.log(res);
        for(let i in res){
          //console.log(res[i]['status']['status']);
          if(res[i]['status']['status']==="Closed"){
            this.solvedIssue++;
          }
          if(res[i]['status']['status']==="Active"){
            this.activeIssue++;
          }

        }
        this.totalIssue=this.solvedIssue+this.activeIssue;
        this.allComplaintsByEmployee=res;

      },
      err => {
        console.log(err);

      }
    )
    this._service.getCurrentUser(this._authtoken).subscribe(
      res => {
        //console.log(res);

        this.currentUser=res;
      },
      err => {
        console.log(err);

      }
    )
  }
  display = false;
  onEditStatus(){
    this.display = !this.display;
  }

}
