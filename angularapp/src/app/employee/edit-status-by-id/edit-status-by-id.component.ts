import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { EventService } from 'src/app/event.service';

@Component({
  selector: 'app-edit-status-by-id',
  templateUrl: './edit-status-by-id.component.html',
  styleUrls: ['./edit-status-by-id.component.css']
})
export class EditStatusByIdComponent implements OnInit {
  private _authtoken=localStorage.getItem('Authorization');
  public complaint:any=[]
  constructor(public authService:AuthService, private _service:EventService,private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    let id:any=this._activatedRoute.snapshot.paramMap.get('id');
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
  display = true;
  onEditStatus(){
    this.display = !this.display;
  }
}
