import { Component } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ApiServicesService } from 'src/app/support/api-services.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor( public api:ApiServicesService, 
    private route: ActivatedRoute,
    private router: Router)
    {}

    signup(name:any,lname:any,mono:any,email:any,pass:any){
      if(name == undefined || name == null || name == ''){
        Swal.fire({
          title: 'Error!',
          text: 'Please Enter Your Name',
          icon: 'error',
          confirmButtonText: 'Cool',
          timer: 1500
        })
        return
       }
       if(lname == undefined || lname == null || lname == ''){
        Swal.fire({
          title: 'Error!',
          text: 'Please Enter Your Last Name',
          icon: 'error',
          confirmButtonText: 'Cool',
          timer: 1500
        })
        return
       }

       if(mono == undefined || mono == null || mono == ''){
        Swal.fire({
          title: 'Error!',
          text: 'Please Enter Your mobile number',
          icon: 'error',
          confirmButtonText: 'Cool',
          timer: 1500
        })
        return
       }


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
  let url = "signup.php";
  this.api.get_data(url, { 'name':name, 'lname':lname,'mono':mono, 'email':email,'pass':pass})
  .subscribe(async (res: any) => { 
    if(res['status'] == 1){
      let navigationExtras: NavigationExtras = {
        state: {
          email:email,
          pass: pass,
          type:'u'
        },
      };
  this.router.navigateByUrl('otp', navigationExtras);
    }
    else if(res['status'] == 0){
      Swal.fire({
        title: 'Alert',
        text: 'Please Check Your Details!',
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
