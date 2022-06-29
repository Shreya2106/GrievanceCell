import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { EventService } from 'src/app/event.service';
@Component({
  selector: 'app-admin-solved-issue',
  templateUrl: './admin-solved-issue.component.html',
  styleUrls: ['./admin-solved-issue.component.css']
})
export class AdminSolvedIssueComponent implements OnInit {
  constructor(public authService:AuthService,private _eventService:EventService) { }
  private _authtoken=localStorage.getItem('Authorization');
  public allComplaintsByAdmin=[];
  public noUser=0;
  public noDeveloper=0;
  public noActive=0;
  public noSolved=0;
  ngOnInit(): void {
    this._eventService.getAllComplaintsByAdmin(this._authtoken).subscribe(
      res => {
        
        this.allComplaintsByAdmin=res;
        for(let u in res){
          
          if(res[u]['status']['status']==='Active'){
            this.noActive++;
          }
          if(res[u]['status']['status']==='Closed'){
            this.noSolved++;
          }
        }

      },
      err =>{
        console.log(err);

      }

    )
    this._eventService.getAllUsers(this._authtoken).subscribe(
      res => {
        for(let u in res){
          
          if(res[u]['role']==='ROLE_USER'){
            this.noUser++;
          }
          if(res[u]['role']==='ROLE_EMPLOYEE'){
            this.noDeveloper++;
          }

        }
      },
      err => {
        console.log(err);

      }
    )

  }
}
