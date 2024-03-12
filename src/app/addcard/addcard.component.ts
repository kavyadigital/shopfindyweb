import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ApiServicesService } from 'src/app/support/api-services.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-addcard',
  templateUrl: './addcard.component.html',
  styleUrls: ['./addcard.component.css']
})
export class AddcardComponent {
  email:any;
  pass:any;
  user_type: any;
  user_id: any;
  card_list_me: any;
    constructor( public api:ApiServicesService, 
      private route: ActivatedRoute,
      private router: Router)
      {
        this.list_of_cards();
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
 
  user_details() {
    const user = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
    this.user_id = user.value;
    console.log(this.user_id)
    const user_type = new BehaviorSubject(JSON.parse(localStorage.getItem('user_type')!));
    this.user_type = user_type.value;
     console.log(this.user_type)
  }
  
    addcard(card_number:any,exp_month:any,exp_year:any,cvv:any,card_holder:any){
      if(card_number.value == undefined || card_number.value == null || card_number.value == ''){
        Swal.fire({
          title: 'Error!',
          text: 'Please Enter Your Card Number',
          icon: 'error',
          confirmButtonText: 'Cool',
          timer: 1500
        })
        return
  
  
        
      }
      if(exp_month.value == undefined || exp_month.value == null || exp_month.value == ''){
        Swal.fire({
          title: 'Error!',
          text: 'Please Enter Your Card Expiration Month',
          icon: 'error',
          confirmButtonText: 'Cool',
          timer: 1500
        })
        return
      }

      // if(exp_month.value < 10 || exp_month.value > 99){
      //   Swal.fire({
      //     title: 'Error!',
      //     text: 'Please Enter Your Card Expiration Month',
      //     icon: 'error',
      //     confirmButtonText: 'Cool',
      //     timer: 1500
      //   })
      //   return
      // }
      
      if(exp_year.value == undefined || exp_year.value == null || exp_year.value == ''){
        Swal.fire({
          title: 'Error!',
          text: 'Please Enter Your Card Expiration Year',
          icon: 'error',
          confirmButtonText: 'Cool',
          timer: 1500
        })
        return
      }


      if(cvv.value == undefined || cvv.value == null || cvv.value == ''){
        Swal.fire({
          title: 'Error!',
          text: 'Please Enter Your Card CVV',
          icon: 'error',
          confirmButtonText: 'Cool',
          timer: 1500
        })
        return
      }


      if(card_holder.value == undefined || card_holder.value == null || card_holder.value == ''){
        Swal.fire({
          title: 'Error!',
          text: 'Please Enter Your Card Holder Name',
          icon: 'error',
          confirmButtonText: 'Cool',
          timer: 1500
        })
        return
      }
this.user_details(); 
///////////////////////////////////////////////////////////////////////

  let url = "save_card_details.php";
  this.api.get_data(url, {'user_id':this.user_id, 'card_no':card_number.value, 'exe_month':exp_month.value, 'exe_year':exp_year.value,'cvv':cvv.value,'card_holder':card_holder.value})
  .subscribe(async (res: any) => { 
    if(res['status'] == 1){
      Swal.fire({
        title: 'Card Added Successfully',
        icon: 'success',
        timer: 2000
      })
      this.list_of_cards()
    }
    else if(res['status'] == 0){
      Swal.fire({
        title: 'Alert',
        text: 'Please Check Your Given Details!',
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
list_of_cards() {
  this.user_details();
  let url = "mycard_list.php";
  this.api.get_data(url, { 'user_id': this.user_id })
    .subscribe(async (res: any) => {
      if (res['status'] == 1) {
        this.card_list_me = res['result'];
      }
      else if (res['status'] == 0) {
       
      }
      else {
        
      }
    }, (err: any) => {
      console.log(err);
    });

}

delete_card(list:any){
  Swal.fire({
    title: 'Are you sure?',
    text: 'Want to delete this Card!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
    
      this.user_details();
  let url = "delete_card.php";
  this.api.get_data(url, { 'user_id': this.user_id,'id':list.id })
    .subscribe(async (res: any) => {
      if (res['status'] == 1) {
        this.list_of_cards();
        Swal.fire({
          title: 'Alert',
          text: 'Your data has been deleted!',
          icon: 'success',
          timer: 2000
        })
      }
      else if (res['status'] == 0) {
        Swal.fire({
          title: 'Alert',
          text: 'Failed to Delete!',
          icon: 'error',
          timer: 2000
        }) 
      }
     
    }, (err: any) => {
      console.log(err);
    });

  
      // Swal.fire(
      //   'Deleted!',
      //   'Your data has been deleted.',
      //   'success',
    
      // );
    }
  });
}

}

    ///////////////////////////////////////////////////////////////////////////////////////////////


