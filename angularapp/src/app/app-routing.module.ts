import { Component, NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './user/home/home.component';
import { AddIssueComponent } from './user/add-issue/add-issue.component';
import { ManageUsersComponent } from './admin/manage-users/manage-users.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminSolvedIssueComponent } from './admin/admin-solved-issue/admin-solved-issue.component';
import { AdminActiveIssueComponent } from './admin/admin-active-issue/admin-active-issue.component';
import { EmployeeHomeComponent } from './employee/employee-home/employee-home.component';
import { EmployeeSolvedIssueComponent } from './employee/employee-solved-issue/employee-solved-issue.component';
import { SolvedIssueComponent } from './user/solved-issue/solved-issue.component';
import { AssignDeveloperByIdComponent } from './admin/assign-developer-by-id/assign-developer-by-id.component';
import { AdminManageUsersByIdComponent } from './admin/admin-manage-users-by-id/admin-manage-users-by-id.component';
import { EditStatusByIdComponent } from './employee/edit-status-by-id/edit-status-by-id.component';
import { EditIssueByIdComponent } from './user/edit-issue-by-id/edit-issue-by-id.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'userhome',component:HomeComponent, canActivate:[AuthGuard]},
  {path:'useraddissue',component:AddIssueComponent, canActivate:[AuthGuard]},
  {path:'usersolvedissue',component:SolvedIssueComponent, canActivate:[AuthGuard]},
  {path:'adminmanageusers',component:ManageUsersComponent, canActivate:[AuthGuard]},
  {path:'adminhome',component:AdminHomeComponent,canActivate:[AuthGuard]},
  {path:'adminsolvedissue',component:AdminSolvedIssueComponent,canActivate:[AuthGuard]},
  {path:'adminactiveissue',component:AdminActiveIssueComponent,canActivate:[AuthGuard]},
  {path:'employeehome',component:EmployeeHomeComponent,canActivate:[AuthGuard]},
  {path:'employeesolvedissue',component:EmployeeSolvedIssueComponent,canActivate:[AuthGuard]},
  {path:'assigndeveloperbyid/:id',component:AssignDeveloperByIdComponent,canActivate:[AuthGuard]},
  {path:'adminmanageusersbyid/:id',component:AdminManageUsersByIdComponent,canActivate:[AuthGuard]},
  {path:'editstatusbyid/:id',component:EditStatusByIdComponent,canActivate:[AuthGuard]},
  {path:'editissuebyid/:id',component:EditIssueByIdComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router) {
    this.router.errorHandler = (error: any) => {
        this.router.navigate(['']); // or redirect to default route
    }
  }
 }
