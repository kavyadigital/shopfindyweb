import { Component } from '@angular/core';
import { ApiServicesService } from '../support/api-services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sharme',
  templateUrl: './sharme.component.html',
  styleUrls: ['./sharme.component.css']
})
export class SharmeComponent {
  user_id: any;
  user_type: any;
  w_balance: any;
  store_list_me: any;
  url = 'https://testkavyadigitalsolution.com/shopfindy/api/admin/uploads/'
  trans_list_me: any;
  referrals_list_me: any;
  code: any;
  constructor( public api:ApiServicesService, 
    private route: ActivatedRoute,
    private router: Router)
    {
this.user_details();
this.balance();
this.store_list();
this.list_of_transaction();
this.list_of_referral();
    }
      user_details() {
      const user = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
      this.user_id = user.value;
      console.log(this.user_id)
      const user_type = new BehaviorSubject(JSON.parse(localStorage.getItem('user_type')!));
      this.user_type = user_type.value;
      const code = new BehaviorSubject(JSON.parse(localStorage.getItem('code')!));
      this.code = code.value;
      console.log(this.code)
    }

    share(email:any,code:any){
      if(email.value == undefined || email.value == null || email.value == ''){
        Swal.fire({
          title: 'Error!',
          text: 'Please Enter Your Email to share',
          icon: 'error',
          confirmButtonText: 'Cool',
          timer: 1500
        })
        return
      }
      Swal.fire({
        title: 'Please wait',
        didOpen: () => {
            Swal.showLoading();
            setTimeout(() => {
                Swal.close();
            }, 8000);
        }
    });
      this.user_details()
      let url = "send_mail.php";
      this.api.get_data(url, { 'user_id': this.user_id,'email':email.value,'code':code})
        .subscribe(async (res: any) => {
          if (res['status'] == 1) {
            Swal.fire({
              title: 'Mail Sent successfully!',
              icon: 'success',
              confirmButtonText: 'Cool',
              timer: 1500
            })
            return
          }
          else if (res['status'] == 0) {
            Swal.fire({
              title: 'failed to send mail!',
              icon: 'error',
              // confirmButtonText: 'Cool',
              timer: 1500
            })
            return
          }
          else {
            
          }
        }, (err: any) => {
          console.log(err);
        });

    }


    balance() {
      this.user_details()
      let url = "wallet_balance.php";
      this.api.get_data(url, { 'user_id': this.user_id })
        .subscribe(async (res: any) => {
          if (res['status'] == 1) {
            this.w_balance = res['result'][0]['amount'];
          }
          else if (res['status'] == 0) {
           
          }
          else {
            
          }
        }, (err: any) => {
          console.log(err);
        });
    }

    store_list() {
      this.user_details()
      let url = "store_list.php";
      this.api.get_data(url, { 'user_id': this.user_id })
        .subscribe(async (res: any) => {
          if (res['status'] == 1) {
            this.store_list_me = res['result'];
          }
          else if (res['status'] == 0) {
           
          }
          else {
            
          }
        }, (err: any) => {
          console.log(err);
        });
  
    }


    list_of_transaction() {
      this.user_details();
      let url = "listoftransaction.php";
      this.api.get_data(url, { 'user_id': this.user_id })
        .subscribe(async (res: any) => {
          if (res['status'] == 1) {
            this.trans_list_me = res['result'];
          }
          else if (res['status'] == 0) {
           
          }
          else {
            
          }
        }, (err: any) => {
          console.log(err);
        });
  
    }

    list_of_referral() {
      this.user_details();
      let url = "my_referrals.php";
      this.api.get_data(url, { 'user_id': this.code })
        .subscribe(async (res: any) => {
          if (res['status'] == 1) {
            this.referrals_list_me = res['result'];
          }
          else if (res['status'] == 0) {
           
          }
          else {
            
          }
        }, (err: any) => {
          console.log(err);
        });
  
    }

    
  logout(){
    const user = localStorage.removeItem('user');
    const user_type = localStorage.removeItem('user_type');
    const ac_status = localStorage.removeItem('ac_status');
    const user_temp = localStorage.removeItem('user_temp');
    {
    this.router.navigateByUrl('login');
      // window.location.reload();
    };
    }
}
