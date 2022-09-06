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
  private _getAllComplaints = "http://localhost:8080/admin";
  private _getAllOpenedStatus = "http://localhost:8080/admin/openStatus";
  private _getAllClosedStatus = "http://localhost:8080/admin/closeStatus";
  private _addEmployee="http://localhost:8080/admin/addEmployee";
  private _deleteEmployeeById="http://localhost:8080/admin/deleteEmployee/";
  private _updateEmployeeById="http://localhost:8080/admin/updateEmployee/"
  private _getCurrentUser="http://localhost:8080/currentUser";
  private _getAllUsers="http://localhost:8080/admin/users";
  private _addComplaint="http://localhost:8080/addComplaint";
  private _getComplaint="http://localhost:8080/complaint"
  private _getComplaintById="http://localhost:8080/complaint/";
  private _editComplaintById="http://localhost:8080/complaint/";
  private _mapComplaint="http://localhost:8080/admin/mapComplaint/";
  private _editStatusByUser="http://localhost:8080/status/";
  private _getComplaintByEmployee="http://localhost:8080/employee/complaint";
  private _getEachComplaintDetailByEmployee="http://localhost:8080/employee/complaint/";
  private _editComplaintByEmployee = "http://localhost:8080/employee/complaint/"
  private _editStatusByEmployee="http://localhost:8080/employee/status/"
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
