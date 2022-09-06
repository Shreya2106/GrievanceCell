import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/event.service';

@Component({
  selector: 'app-assign-developer-by-id',
  templateUrl: './assign-developer-by-id.component.html',
  styleUrls: ['./assign-developer-by-id.component.css']
})
export class AssignDeveloperByIdComponent implements OnInit {

  constructor(private _activatedRoute:ActivatedRoute,private _service:EventService) { }
  private _authtoken=localStorage.getItem('Authorization');
  public complaintDetails:any=[];
  public noUser=0;
  public noDeveloper=0;
  public noActive=0;
  public noSolved=0;
  ngOnInit(): void {
    let id:any=this._activatedRoute.snapshot.paramMap.get('id');
    
    this._service.getAllComplaintsByAdmin(this._authtoken).subscribe(
      res => {
        
        for(let i in res){
          
          if(res[i]['complaintId']==id){
              this.complaintDetails=res[i];
          }

        }
        for(let u in res){
          
          if(res[u]['status']['status']==='Active'){
            this.noActive++;
          }
          if(res[u]['status']['status']==='Closed'){
            this.noSolved++;
          }
        }
        


      },
      err => {
        console.log(err);

      }
    )
    this._service.getAllUsers(this._authtoken).subscribe(
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

    this.display=true;
  }
  display=false;
  onEditStatus(){
    this.display = !this.display;
  }

}
