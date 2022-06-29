import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { EventService } from 'src/app/event.service';

@Component({
  selector: 'app-edit-issue-by-id',
  templateUrl: './edit-issue-by-id.component.html',
  styleUrls: ['./edit-issue-by-id.component.css']
})
export class EditIssueByIdComponent implements OnInit {

  constructor(private _route:Router,private _activatedRoute:ActivatedRoute, private _service:EventService,public authService:AuthService) { }
  private _authToken=localStorage.getItem('Authorization');
  public issueDetail:any=[];
  display=true;
  ngOnInit(): void {
    let id:any=this._activatedRoute.snapshot.paramMap.get('id');
    this._service.getComplaintById(id,this._authToken).subscribe(
      res => {
        //console.log(res);
        this.issueDetail=res;

      },
      err => {
        console.log(err);

      }
    )

  }

}
