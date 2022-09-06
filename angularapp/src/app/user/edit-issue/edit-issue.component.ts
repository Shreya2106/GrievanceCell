import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/event.service';
import { IssueStatus } from 'src/app/issue-status';

@Component({
  selector: 'app-edit-issue',
  templateUrl: './edit-issue.component.html',
  styleUrls: ['./edit-issue.component.css']
})
export class EditIssueComponent implements OnInit {
  issueStatus={
    "complaintName":"",
    "status":{
      "statusDesc":""
    }
  }
  constructor(private _route:Router,private _activatedRoute:ActivatedRoute, private _service:EventService) { }
  private _authToken=localStorage.getItem('Authorization');
  public statusDetail:any=[];
  //public status={};
  private _issueId:any;
  ngOnInit(): void {
    let id:any=this._activatedRoute.snapshot.paramMap.get('id');
    this._issueId=id;
    this._service.getComplaintById(id,this._authToken).subscribe(
      res => {

        //console.log(res['status']);
        this.statusDetail=res;
        //this.status=res['status'];

      },
      err => {
        console.log(err);

      }
    )




  }
  imgURL:string | ArrayBuffer ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKFSgdhQvBlZO6I8s-jtKIYOED1NqEs4xEjA&usqp=CAU";
  preview(value: any)
  {
    this.imgURL=value;
  }
  editIssueByUser(){
    // console.log(this.statusDetail);
    // console.log(this.statusDetail.status);
    // console.log(this.statusDetail.status.statusId);
    this._service.editComplaintById(this._issueId,this.statusDetail,this._authToken).subscribe(
      res => {
        //console.log(res);

      },
      err => {
        console.log(err);

      }
    )
    this._service.editStatusByUser(this.statusDetail.status.statusId,this.statusDetail.status,this._authToken).subscribe(
      res => {
        //console.log(res);
        this._route.navigate(['userhome']);

      },
      err => {
        console.log(err);

      }
    )



  }
  backToUserHome(){
      this._route.navigate(['userhome']);
  }

}
