import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  //localhost:4200
  {path:'',component:LoginComponent},
  //localhost:4200/home
  {path:'home',component:HomeComponent,canActivate:[authGuard]},
  { path: 'employee', loadChildren: () => import('./module/employee/employee.module').then(m => m.EmployeeModule),canActivate:[authGuard] },
  {path:'**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
