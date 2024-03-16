import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  base_url="http://localhost:3000"

  constructor(private http:HttpClient) { }

  getAdminDetails(){
    return this.http.get(`${this.base_url}/employees/1`)
  }

  getEmployeeDetails(data:any){
    return this.http.post(`${this.base_url}/employees`,data)
  }

  getEmployees(){
    return this.http.get(`${this.base_url}/employees`)
  }

  getSpecificEmployee(id:any){
    return this.http.get(`${this.base_url}/employees/${id}`)
  }

  updateEmployeeDetails(data:any,id:any){
    return this.http.put(`${this.base_url}/employees/${id}`,data)
  }

  deleteEmployee(id:any){
    return this.http.delete(`${this.base_url}/employees/${id}`)
  }

  getAdmin(){
    return this.http.get(`${this.base_url}/employees/1`)
  }

  updateAdmin(data:any){
    return this.http.put(`${this.base_url}/employees/1`,data)
  }

  isLoggedIn(){
    return !!sessionStorage.getItem("adminDetails")
  }



}


