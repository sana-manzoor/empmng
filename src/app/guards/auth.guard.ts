import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { ToastrService } from 'ngx-toastr';

export const authGuard: CanActivateFn = () => {
  const admin=inject(AdminService)
  const toastr=inject(ToastrService)
  const router=inject(Router)
  if(admin.isLoggedIn()){
    return true

  }
  else{
    toastr.warning("Operation denied..Please login!!")
    router.navigateByUrl("/")
    return false

  }
};
