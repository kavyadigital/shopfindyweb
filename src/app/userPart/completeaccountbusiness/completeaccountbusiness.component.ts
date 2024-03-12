import { Component } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ApiServicesService } from 'src/app/support/api-services.service';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-completeaccountbusiness',
  templateUrl: './completeaccountbusiness.component.html',
  styleUrls: ['./completeaccountbusiness.component.css']
})
export class CompleteaccountbusinessComponent {
  user_id: any;
  email: any;
  mono: any;
  pass: any;
  name: any;
  lname: any;
  id: any;
  list_of_state: any;
  b_land: any;
  r_code:any;
  constructor( public api:ApiServicesService, 
    private route: ActivatedRoute,
    private router: Router)
    {
    this.myProfile();
    this.state_list();
    }
    user_details(){
      const user = new BehaviorSubject(JSON.parse(localStorage.getItem('user_temp')!));
      this.user_id = user.value;
    }
    state_list(){
      this.user_details()
          let url = "state_list.php";
          this.api.get_data(url, { 'user_id': this.user_id})
          .subscribe(async (res: any) => { 
            console.log(res)
            if(res['status'] == 1){
              this.list_of_state = res['result']
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

        async completeaccount(user_b:any,address:any,city:any,state:any,r_code:any){
          this.user_details();
          if (!user_b.value) {
            Swal.fire({
              title: 'Alert',
              text: 'Please Input Business Owner name!',
              icon: 'error',
              timer: 2000
            })
            return;
          }

          if (!address.value) {
            Swal.fire({
              title: 'Alert',
              text: 'Please Input Your Address!',
              icon: 'error',
              timer: 2000
            })
            return;
          }
          if (!city.value) {
            Swal.fire({
              title: 'Alert',
              text: 'Please Input Your City!',
              icon: 'error',
              timer: 2000
            })
            return;
          }
      
          if (!state.value) {
            Swal.fire({
              title: 'Alert',
              text: 'Please Input Your State!',
              icon: 'error',
              timer: 2000
            })
            return;
          }

          let url = "completeAC_b.php";
          this.api.get_data(url, { 
          'user_id': this.user_id,
          'user_b':user_b.value,
          'address':address.value,
          'city':city.value,
          'state':state.value,
          'r_code':r_code,
          'email':this.email})
          .subscribe(async (res: any) => { 
            if(res['status'] == 1){
              const user = localStorage.removeItem('user');
              const user_temp = localStorage.removeItem('user_temp');
              const ac_status = localStorage.removeItem('ac_status');
              window.location.reload();
              Swal.fire({
                title: 'Alert',
                text: 'Account Completed!',
                icon: 'success',
                timer: 2000
              })
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
      

    myProfile(){
      this.user_details()
          let url = "getprofileforcomplete_b.php";
          this.api.get_data(url, { 'user_id': this.user_id})
          .subscribe(async (res: any) => { 
            console.log(res)
            if(res['status'] == 1){
              this.email= res['result'][0]['b_email'];
              this.mono= res['result'][0]['b_mono'];
              this.pass= res['result'][0]['b_pass'];
              this.name= res['result'][0]['business_name'];
              this.b_land= res['result'][0]['b_land'];
              this.id= res['result'][0]['id'];
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
