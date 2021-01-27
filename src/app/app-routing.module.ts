import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ViewEmployeesComponent } from './admin-dashboard/view-employees/view-employees.component';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeHomeComponent } from './employee-home/employee-home.component';


const routes: Routes = [
  {path:"Login", component:LoginComponent},
  {path:"admin-home", component:AdminHomeComponent},
  {path:"employee-dashboard", component:EmployeeDashboardComponent},
  {path:"view-employees", component:ViewEmployeesComponent},
  {path:"add-employee", component:AddEmployeeComponent},
  {path:"admin-profile", component:AdminProfileComponent},
  {path:"employee-home", component:EmployeeHomeComponent},
  {path:"employee-list", component:EmployeeListComponent},
  { path:"**", redirectTo:'Login' }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
