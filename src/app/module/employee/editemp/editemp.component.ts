import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { userSchema } from '../schemas/userSchema';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editemp',
  templateUrl: './editemp.component.html',
  styleUrls: ['./editemp.component.css']
})
export class EditempComponent implements OnInit {
  id:string=""
user:userSchema={}

  constructor(private aroute:ActivatedRoute,private admin:AdminService,private toastr:ToastrService,private r:Router){
    this.aroute.params.subscribe((res:any)=>{
      console.log(res)
      this.id=res.id
      console.log(this.id)
    })
  }

  ngOnInit() {
    this.admin.getSpecificEmployee(this.id).subscribe((res:any)=>{
      console.log(res)
      this.user.empId=res.empId
      this.user.username=res.username
      this.user.email=res.email
      this.user.status=res.status

      console.log(this.user)
    })
  }

  getUpdateData(){
    console.log(this.user)
    const {empId,username,email,status}=this.user
    if(username && email && empId && status){
      this.admin.updateEmployeeDetails(this.user,this.id).subscribe((res:any)=>{
          console.log(res)
          this.toastr.success("Employee Updation Sucessfull!!")
          this.r.navigateByUrl("/employee")
      },
      (err:any)=>{
        this.toastr.error("Employee Updation Failed!!")
      })
    }
    else{
      this.toastr.info("Enter Valid Data!!")
    }
   

  }

}
