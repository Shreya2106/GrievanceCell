import { Component, OnInit } from '@angular/core';
import { EditIssueByEmployee } from 'src/app/edit-issue-by-employee';
import { ActivatedRoute, Router } from '@angular/router';
import { NgServiceService } from 'src/app/ng-service.service';
import { AuthService } from 'src/app/auth.service';
import { EventService } from 'src/app/event.service';

@Component({
  selector: 'app-edit-status',
  templateUrl: './edit-status.component.html',
  styleUrls: ['./edit-status.component.css']
})
export class EditStatusComponent implements OnInit {
  editIssuebyEmployee = new EditIssueByEmployee();
  private _authtoken=localStorage.getItem('Authorization');
  public complaint:any=[]
  constructor(private _route:Router,public authService:AuthService, private _service:EventService,private _activatedRoute:ActivatedRoute) { }
  private _issueId:any;
  ngOnInit(): void {
    let id:any=this._activatedRoute.snapshot.paramMap.get('id');
    this._issueId=id;
    this._service.getEachComplaintDetailByEmployee(id,this._authtoken).subscribe(
      res => {
        //console.log(res);
        this.complaint=res;

      },
      err => {
        console.log(err);

      }
    )
  }
  // reloadCurrentRoute() {
  //   const currentUrl = this._route.url;
  //   this._route.navigateByUrl('/', {skipLocationChange: true}).then(() => {
  //       this._route.navigate([currentUrl]);
  //   });
//}
  editIssueStatus(){
      //console.log(this.complaint);
      //console.log("Status Edited");
      //this.reloadCurrentRoute();
      //this._route.navigate(['employeehome']);
      // console.log(this.statusDetail);
    // console.log(this.statusDetail.status);
    // console.log(this.statusDetail.status.statusId);
    this._service.editComplaintByEmployee(this._issueId,this.complaint,this._authtoken).subscribe(
      res => {
        //console.log(res);

      },
      err => {
        console.log(err);

      }
    )
    this._service.editStatusByUser(this.complaint.status.statusId,this.complaint.status,this._authtoken).subscribe(
      res => {
        //console.log(res);
        this._route.navigate(['employeehome']);

      },
      err => {
        console.log(err);

      }
    )
  }
  backToEmployeeHome(){
    this._route.navigate(['employeehome']);
  }
}
