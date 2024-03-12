import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ApiServicesService } from 'src/app/support/api-services.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:any;
  pass:any;
  user_type: any;
    constructor( public api:ApiServicesService, 
      private route: ActivatedRoute,
      private router: Router)
      {
        // const user = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
        // if(user)
        // {
        //      this.router.navigate(['/login']);
        // }
        //   else
        // {
        //     this.router.navigate(['/home']);
        // }
  }
 
    login(email:any, pass:any, userType:any){
      // console.log(userType);
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
      if(pass == undefined || pass == null || pass == ''){
        Swal.fire({
          title: 'Error!',
          text: 'Please Enter Your Password',
          icon: 'error',
          confirmButtonText: 'Cool',
          timer: 1500
        })
        return
      }
///////////////////////////////////////////////////////////////////////
if(userType == 'u'){
  let url = "login.php";
  this.api.get_data(url, { 'email':email, 'pass':pass, 'token':'qwertyuioasdfghjkxcvbnm98485dfghrdfghjjhfg'})
  .subscribe(async (res: any) => { 
    if(res['status'] == 1){
      Swal.fire({
        title: 'Welcome !'+ email,
        icon: 'success',
        timer: 2000
      })
      localStorage.setItem('user', JSON.stringify(res['result'][0]['user_id']));
      localStorage.setItem('user_type',JSON.stringify(userType));
      localStorage.setItem('code',JSON.stringify(res['result'][0]['referral_code']));
     const returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'home';
                  this.router.navigateByUrl(returnUrl);
                  // console.log(returnUrl)
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

  // let userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
    }, (err: any) => {
      console.log(err);
    });
}       

if(userType == 'b'){
  let url = "login_b.php";
  this.api.get_data(url, { 'email':email, 'pass':pass, 'token':'qwertyuioasdfghjkxcvbnm98485dfghrdfghjjhfg'})
  .subscribe(async (res: any) => { 
    if(res['status'] == 1){
      Swal.fire({
        title: 'Welcome !'+ email,
        icon: 'success',
        timer: 2000
      })
      localStorage.setItem('user', JSON.stringify(res['result'][0]['user_id']));
      localStorage.setItem('user_type',JSON.stringify(userType));
      localStorage.setItem('code',JSON.stringify(res['result'][0]['referral_code']));
     const returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'home';
                  this.router.navigateByUrl(returnUrl);
                  // console.log(returnUrl)
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

  // let userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
    }, (err: any) => {
      console.log(err);
    });  
}

}
 
  }
    ///////////////////////////////////////////////////////////////////////////////////////////////

