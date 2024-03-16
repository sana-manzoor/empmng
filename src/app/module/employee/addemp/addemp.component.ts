import { Component } from '@angular/core';
import { userSchema } from '../schemas/userSchema';
import { AdminService } from 'src/app/services/admin.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent {

  constructor(private admin:AdminService,private toastr:ToastrService,private r:Router){

  }

  user:userSchema={}

  cancel(){
    this.user.empId=""
    this.user.email=""
    this.user.username=""
    this.user.status=""
    this.r.navigateByUrl('/employee')
  
  }

  getAddData(){
    console.log(this.user)
    this.admin.getEmployeeDetails(this.user).subscribe((res:any)=>{
      console.log(res)
      this.toastr.success("Employee Added Successfully!!")
      this.cancel()
    },
    (err)=>{
      console.log(err,"error")
      this.toastr.error("Employee Adding Failed")
    })

  }

}
