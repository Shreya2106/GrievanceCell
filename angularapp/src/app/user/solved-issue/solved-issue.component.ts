import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { EventService } from 'src/app/event.service';
@Component({
  selector: 'app-solved-issue',
  templateUrl: './solved-issue.component.html',
  styleUrls: ['./solved-issue.component.css']
})
export class SolvedIssueComponent implements OnInit {
  constructor(private _service:EventService,public authService:AuthService) { }
  private _authToken=localStorage.getItem('Authorization');
  public allComplaints=[];
  public currentUser:any;
  public totalIssue=0;
  public activeIssue=0;
  public solvedIssue=0;
  ngOnInit(): void {
    this._service.getAllComplaints(this._authToken).subscribe(
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
}
