import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { EventService } from 'src/app/event.service';
import { IssueStatus } from 'src/app/issue-status';
@Component({
  selector: 'app-add-issue',
  templateUrl: './add-issue.component.html',
  styleUrls: ['./add-issue.component.css']
})
export class AddIssueComponent implements OnInit {
  //issueStatus = new IssueStatus();
  issueStatus={
    "complaintName":"",
    "status":{
      "statusDesc":""
    }
  }
  constructor( private _route:Router, private _service:EventService,public authService:AuthService) { }
  private _authToken=localStorage.getItem('Authorization');
  ngOnInit(): void {
  }
  imgURL:string | ArrayBuffer ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKFSgdhQvBlZO6I8s-jtKIYOED1NqEs4xEjA&usqp=CAU";
  preview(value: any)
  {
    this.imgURL=value;
  }
  addIssueByUser(){
    //console.warn(this.issueStatus);
    this._service.addComplaintByUser(this._authToken,this.issueStatus).subscribe(
      data=> {
        console.log("Data added sucessfully");
        this._route.navigate(['userhome']);
      },
      err=> {
        console.log("Error Occured");
        alert("Error Occurred");
      }
    )
  }


}
