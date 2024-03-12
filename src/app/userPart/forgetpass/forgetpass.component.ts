import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ApiServicesService } from 'src/app/support/api-services.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-forgetpass',
  templateUrl: './forgetpass.component.html',
  styleUrls: ['./forgetpass.component.css']
})
export class ForgetpassComponent {
  email:any;
  pass:any;
  user_type: any;
    constructor( public api:ApiServicesService, 
      private route: ActivatedRoute,
      private router: Router)
      {
      }
 
  forget(email:any,userType:any){
      const expression: RegExp = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;
      const result: boolean = expression.test(email);
      if(result == false){
        Swal.fire({
          title: 'Error!',
          text: 'Enter Valid Email Id',
          icon: 'error',
          confirmButtonText: 'Cool',
          timer: 1500
        })
        return
      }
  
      if(email == undefined || email == null || email == ''){
        Swal.fire({
          title: 'Error!',
          text: 'Please Enter Your Email id',
          icon: 'error',
          confirmButtonText: 'Cool',
          timer: 1500
        })
        return
  }
    
///////////////////////////////////////////////////////////////////////
if(userType == 'u'){
  let url = "forget.php";
  this.api.get_data(url, { 'email':email, 'token':'qwertyuioasdfghjkxcvbnm98485dfghrdfghjjhfg'})
  .subscribe(async (res: any) => { 
    if(res['status'] == 1){
      Swal.fire({
        title: 'Password Sent to your email',
        icon: 'success',
        timer: 2000
      })
      this.router.navigateByUrl('login');
    }
    else if(res['status'] == 0){
      Swal.fire({
        title: 'Alert',
        text: 'Please Check Your login credentials!',
        icon: 'error',
        timer: 2000
      })
    }
    else{
      Swal.fire({
        title: 'Alert',
        text: 'Service Error!',
        icon: 'error',
        timer: 2000
      }) 
    }
    }, (err: any) => {
      console.log(err);
    });
}       

if(userType == 'b'){
  let url = "forgot_b.php";
  this.api.get_data(url, { 'email':email,'token':'qwertyuioasdfghjkxcvbnm98485dfghrdfghjjhfg'})
  .subscribe(async (res: any) => { 
    if(res['status'] == 1){
      Swal.fire({
        title: 'Password Sent to your email',
        icon: 'success',
        timer: 2000
      })
      this.router.navigateByUrl('login');
    }
    else if(res['status'] == 0){
      Swal.fire({
        title: 'Alert',
        text: 'Please Check Your login credentials!',
        icon: 'error',
        timer: 2000
      })
    }
    else{
      Swal.fire({
        title: 'Alert',
        text: 'Service Error!',
        icon: 'error',
        timer: 2000
      }) 
    }
    }, (err: any) => {
      console.log(err);
    });  
}
}
getpass(email:any){
  const expression: RegExp = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;
  const result: boolean = expression.test(email);
  if(email == undefined || email == null || email == ''){
    Swal.fire({
      title: 'Error!',
      text: 'Please Enter Your Email id',
      icon: 'error',
      confirmButtonText: 'Cool',
      timer: 1500
    })
    return
}

}
  }
