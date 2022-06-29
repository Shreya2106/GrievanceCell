import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { EventService } from 'src/app/event.service';
import { NgServiceService } from 'src/app/ng-service.service';
@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private _route:Router,private _eventService:EventService,  public authService:AuthService) { }
  private _authtoken=localStorage.getItem('Authorization');

  openedStatus=[]
  closedStatus=[]
  rowindex=0;
  public allComplaintsByAdmin=[];
  public allUsers=[];
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
  assigndeveloperbyid(id:number){
      this._route.navigate(['/assigndeveloperbyid',id]);
  }
}
