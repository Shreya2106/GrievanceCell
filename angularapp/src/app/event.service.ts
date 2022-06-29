import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddEmployeeByAdmin } from './add-employee-by-admin';
import { Observable } from 'rxjs';
import { HttpHeaders  } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EventService {
  private _authtoken:any=localStorage.getItem('Authorization');
  private _getAllComplaints = "https://8080-dadbddafcedfaaeabaacaefaddadcafda.examlyiopb.examly.io/admin";
  private _getAllOpenedStatus = "https://8080-dadbddafcedfaaeabaacaefaddadcafda.examlyiopb.examly.io/admin/openStatus";
  private _getAllClosedStatus = "https://8080-dadbddafcedfaaeabaacaefaddadcafda.examlyiopb.examly.io/admin/closeStatus";
  private _addEmployee="https://8080-dadbddafcedfaaeabaacaefaddadcafda.examlyiopb.examly.io/admin/addEmployee";
  private _deleteEmployeeById="https://8080-dadbddafcedfaaeabaacaefaddadcafda.examlyiopb.examly.io/admin/deleteEmployee/";
  private _updateEmployeeById="https://8080-dadbddafcedfaaeabaacaefaddadcafda.examlyiopb.examly.io/admin/updateEmployee/"
  private _getCurrentUser="https://8080-dadbddafcedfaaeabaacaefaddadcafda.examlyiopb.examly.io/currentUser";
  private _getAllUsers="https://8080-dadbddafcedfaaeabaacaefaddadcafda.examlyiopb.examly.io/admin/users";
  private _addComplaint="https://8080-dadbddafcedfaaeabaacaefaddadcafda.examlyiopb.examly.io/addComplaint";
  private _getComplaint="https://8080-dadbddafcedfaaeabaacaefaddadcafda.examlyiopb.examly.io/complaint"
  private _getComplaintById="https://8080-dadbddafcedfaaeabaacaefaddadcafda.examlyiopb.examly.io/complaint/";
  private _editComplaintById="https://8080-dadbddafcedfaaeabaacaefaddadcafda.examlyiopb.examly.io/complaint/";
  private _mapComplaint="https://8080-dadbddafcedfaaeabaacaefaddadcafda.examlyiopb.examly.io/admin/mapComplaint/";
  private _editStatusByUser="https://8080-dadbddafcedfaaeabaacaefaddadcafda.examlyiopb.examly.io/status/";
  private _getComplaintByEmployee="https://8080-dadbddafcedfaaeabaacaefaddadcafda.examlyiopb.examly.io/employee/complaint";
  private _getEachComplaintDetailByEmployee="https://8080-dadbddafcedfaaeabaacaefaddadcafda.examlyiopb.examly.io/employee/complaint/";
  private _editComplaintByEmployee = "https://8080-dadbddafcedfaaeabaacaefaddadcafda.examlyiopb.examly.io/employee/complaint/"
  private _editStatusByEmployee="https://8080-dadbddafcedfaaeabaacaefaddadcafda.examlyiopb.examly.io/employee/status/"
  constructor(private http:HttpClient) { }




  // getAllComplaints(){
  //   return this.http.get<any>(this._getAllComplaints);
  // }
  getAllOpenedStatus(){
    return this.http.get<any>(this._getAllOpenedStatus);
  }
  getAllClosedStatus(){
    return this.http.get<any>(this._getAllClosedStatus);
  }
  addEmployee(addEmployeeByAdmin:AddEmployeeByAdmin,authToken:any):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': authToken
    })
    return this.http.post<any>(this._addEmployee,addEmployeeByAdmin,{ headers : headers});
  }
  deleteEmployeeById(id:number,authToken:any):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': authToken
    })
    return this.http.delete<any>(this._deleteEmployeeById+id,{ headers : headers});
  }
  updateEmployeeById(id:number,updateEmployeeByAdmin:AddEmployeeByAdmin,authToken:any):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': authToken
    })
    return this.http.put<any>(this._updateEmployeeById+id,updateEmployeeByAdmin,{ headers : headers});
  }
  getCurrentUser(authtoken:any):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': authtoken
    })
    return this.http.get<any>(this._getCurrentUser,{ headers : headers})
  }
  getAllUsers(authtoken:any):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': authtoken
    })
    return this.http.get<any>(this._getAllUsers,{ headers : headers})
  }
  addComplaintByUser(authtoken:any,issue:any):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': authtoken
    })
    return this.http.post<any>(this._addComplaint,issue,{ headers : headers});

  }
  getAllComplaints(authtoken:any):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': authtoken
    })
    return this.http.get<any>(this._getComplaint,{ headers : headers});
  }
  getComplaintById(id:any,authtoken:any):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': authtoken
    })
    return this.http.get<any>(this._getComplaintById+id,{ headers : headers});


  }
  editComplaintById(id:any,editissue:any,authtoken:any):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': authtoken
    })
    return this.http.put<any>(this._editComplaintById+id,editissue,{ headers : headers});
  }
  editStatusByUser(statusid:any,status:any,authtoken:any):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': authtoken
    })
    return this.http.put<any>(this._editStatusByUser+statusid,status,{ headers : headers});
  }
  getAllComplaintsByAdmin(authtoken:any):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': authtoken
    })
    return this.http.get<any>(this._getAllComplaints,{ headers : headers})
  }
  mapComplaintByAdmin(id:any,resolvedby:any,authtoken:any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': authtoken
    })
    return this.http.post<any>(this._mapComplaint+id,resolvedby,{ headers : headers});
  }
  getComplaintByEmployee(authtoken:any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': authtoken
    })
    return this.http.get<any>(this._getComplaintByEmployee,{ headers : headers})
  }
  getEachComplaintDetailByEmployee(id:any,authtoken:any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': authtoken
    })
    return this.http.get<any>(this._getEachComplaintDetailByEmployee+id,{ headers : headers})
  }
  editComplaintByEmployee(id:any,editissue:any,authtoken:any):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': authtoken
    })
    return this.http.put<any>(this._editComplaintByEmployee+id,editissue,{ headers : headers});
  }
  editStatusByEmployee(statusid:any,status:any,authtoken:any):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': authtoken
    })
    return this.http.put<any>(this._editStatusByEmployee+statusid,status,{ headers : headers});
  }

}
