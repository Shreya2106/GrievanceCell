import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { EventService } from 'src/app/event.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private _route:Router, private _service:EventService,public authService:AuthService) { }
  private _authToken=localStorage.getItem('Authorization');
  public allComplaints:any=[];
  public currentUser:any;
  public totalIssue=0;
  public activeIssue=0;
  public solvedIssue=0;
  ngOnInit(): void {
    this._service.getAllComplaints(this._authToken).subscribe(
        res => {
          //console.log(res);
          //this.username=res['createdBy']['username'];
          //console.log(this.username);
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


          this.allComplaints=res;

        },
        err => {
          console.log(err);

        }
    )
    this._service.getCurrentUser(this._authToken).subscribe(
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
  onEditIssueById(id:any){
    //this.display = !this.display;
    this._route.navigate(['/editissuebyid',id]);
  }
}
