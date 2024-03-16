import { Component, EventEmitter, Output } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css']
})
export class UpdateAdminComponent implements OnInit {

  profilePicture:string="https://th.bing.com/th/id/OIP.q-2pBnotvE3E20YTiBAGEgHaHa?w=205&h=205&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  adminStatus:boolean =false
  adminData:any={}
  @Output() adminChangeEvent:any=new EventEmitter
 
  constructor(private admin:AdminService,private toastr:ToastrService){

  }
  ngOnInit() {
    this.getAdminDetails()
   
  }

  getAdminDetails(){
    this.admin.getAdmin().subscribe((res:any)=>{
      this.adminData=res
      console.log(this.adminData)
      if(res.profileImage){
        this.profilePicture=this.adminData.profileImage
      }
     
    })
  }

  updateAdminConfirm(){
    this.adminStatus=true
  }

  onCancel(){
    this.adminStatus=false
  }

  getFile(event:any){
    const file=event.target.files[0]
    console.log(file)
    let fr=new FileReader()
    fr.readAsDataURL(file)
    fr.onload=(event:any)=>{
      console.log(event.target.result)
      this.profilePicture=event.target.result
      this.adminData.profileImage=event.target.result

    }

  }



  handleUpdateAdmin(){
    console.log(this.adminData)
    this.admin.updateAdmin(this.adminData).subscribe((res:any)=>{
      this.toastr.success("Profile Updated Successfully!!")
     
      const updatedData=JSON.stringify(res)
      sessionStorage.setItem("adminDetails",updatedData)
      this.adminChangeEvent.emit(this.adminData.username)

    },
    (err:any)=>{
      this.toastr.error(err)
    })
  }

}
