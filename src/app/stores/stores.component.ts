import { Component } from '@angular/core';
import { ApiServicesService } from '../support/api-services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css']
})
export class StoresComponent {
  user_id: any;
  user_type: any;
  w_balance: any;
  store_list_me: any;
  url = 'https://testkavyadigitalsolution.com/shopfindy/api/admin/uploads/'
  trans_list_me: any;
  constructor( public api:ApiServicesService, 
    private route: ActivatedRoute,
    private router: Router)
    {
this.user_details();
this.balance();
this.store_list();
this.list_of_transaction();
    }

    user_details() {
      const user = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
      this.user_id = user.value;
      console.log(this.user_id)
      const user_type = new BehaviorSubject(JSON.parse(localStorage.getItem('user_type')!));
      this.user_type = user_type.value;
       console.log(this.user_type)
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
