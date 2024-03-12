import { Component } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ApiServicesService } from 'src/app/support/api-services.service';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-completeaccount',
  templateUrl: './completeaccount.component.html',
  styleUrls: ['./completeaccount.component.css']
})
export class CompleteaccountComponent {
  user_id: any;
  email: any;
  mono: any;
  pass: any;
  name: any;
  lname: any;
  id: any;
  list_of_state: any;
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

        async completeaccount(address:any,city:any,state:any,r_code:any){
          // console.log(address.value)
          // console.log(city.value)
          // console.log(state.value)
          this.user_details();
          if (!address.value) {
            Swal.fire({
              title: 'Alert',
              text: 'Please Check Your Details!',
              icon: 'error',
              timer: 2000
            })
            return;
          }
          if (!city.value) {
            Swal.fire({
              title: 'Alert',
              text: 'Please Check Your Details!',
              icon: 'error',
              timer: 2000
            })
            return;
          }
      
          if (!state.value) {
            Swal.fire({
              title: 'Alert',
              text: 'Please Check Your Details!',
              icon: 'error',
              timer: 2000
            })
            return;
          }

          if (!r_code) {
        r_code = 'XXXXXX'
          }



          let url = "completeAC.php";
          this.api.get_data(url, { 'user_id': this.user_id,
          'address':address.value,
          'city':city.value,
          'state':state.value,
          'r_code':r_code,
          'email':this.email
        })
          .subscribe(async (res: any) => { 
            console.log(res)

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
          let url = "getprofileforcomplete.php";
          this.api.get_data(url, { 'user_id': this.user_id})
          .subscribe(async (res: any) => { 
            console.log(res)
            if(res['status'] == 1){
              this.email= res['result'][0]['email'];
              this.mono= res['result'][0]['mobile'];
              this.pass= res['result'][0]['pass'];
              this.name= res['result'][0]['name'];
              this.lname= res['result'][0]['last_name'];
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
