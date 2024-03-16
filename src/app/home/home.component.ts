import { Component } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  count:number=0
  adminUsername:any=""

  constructor(private admin:AdminService,private router:Router){
  const adminData:any=sessionStorage.getItem("adminDetails")
  this.adminUsername=JSON.parse(adminData).username
  }
  ngOnInit() {
    this.getEmployeeCount()
  }

  getEmployeeCount(){
    this.admin.getEmployees().subscribe((res:any)=>{
      this.count=res.filter((item:any)=>item.id!="1").length
      console.log(this.count)
    })
  }

  getAdminUsername(e:any){
    console.log(e)
    this.adminUsername=e

  }

  logout(){
    sessionStorage.clear()
    this.router.navigateByUrl("/")
  }


}
