import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServicesService } from 'src/app/support/api-services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent {
  data:any;
  type: any;
  email: any;
  pass: any;
  constructor( public api:ApiServicesService, 
    private route: ActivatedRoute,
    private router: Router)
    {
      {
        this.data = this.router.getCurrentNavigation()?.extras.state;
        console.log(this.data);
        this.type = this.data.type
        if(this.type == 'u'){
          this.email = this.data.email
          this.pass = this.data.pass
        }
        else if(this.type == 'b'){
          this.email = this.data.email
          this.pass = this.data.pass
        }
        else{
         
        }
      }
    }

    
  async login(otp:any) {
    if(otp == undefined || otp == null || otp == ''){
      Swal.fire({
        title: 'Error!',
        text: 'Please Enter Your otp',
        icon: 'error',
        confirmButtonText: 'Cool',
        timer: 1500
      })
      return
    }
   
     if(this.type == 'b'){
    let url = "b_submitotp.php";
    this.api.get_data(url, { 'email': this.email,'password': this.pass,'otp':otp})
    .subscribe(async (res: any) => { 
      if(res['status'] == 1){
        localStorage.setItem('ac_status',JSON.stringify(res['result'][0].ac_status));
        localStorage.setItem('user_temp',JSON.stringify(res['result'][0].user_id));
        localStorage.setItem('user_type',JSON.stringify(res['result'][0].user_type));
        Swal.fire({
          title: 'OTP verified successfully! !'+ this.email,
          icon: 'success',
          timer: 2000
        })
    this.router.navigateByUrl('intro_b');
  }
  else if(res['status'] == 0){
    Swal.fire({
      title: 'Alert',
      text: 'Please Check Your otp!',
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
     else if(this.type == 'u'){
    let url = "submitotp.php";
    this.api.get_data(url, { 'email': this.email,'password': this.pass,'otp':otp})
    .subscribe(async (res: any) => { 
      if(res['status'] == 1){
        localStorage.setItem('ac_status',JSON.stringify(res['result'][0].ac_status));
        localStorage.setItem('user_temp',JSON.stringify(res['result'][0].user_id));
        localStorage.setItem('user_type',JSON.stringify(res['result'][0].user_type));
        Swal.fire({
          title: 'OTP verified successfully! !'+ this.email,
          icon: 'success',
          timer: 2000
        })
    this.router.navigateByUrl('intro');
  }
  else if(res['status'] == 0){
    Swal.fire({
      title: 'Alert',
      text: 'Please Check Your otp!',
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

