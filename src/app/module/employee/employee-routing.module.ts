import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { AddempComponent } from './addemp/addemp.component';
import { EditempComponent } from './editemp/editemp.component';

const routes: Routes = [
  //localhost:4200/employee
  { path: '', component: EmpListComponent },
  //localhost:4200/employee/list
  // {path:'list',component:EmpListComponent},
  //localhost:4200/employee/add
  {path:'add',component:AddempComponent},
  //localhost:4200/employee/edit/2
  {path:'edit/:id',component:EditempComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
