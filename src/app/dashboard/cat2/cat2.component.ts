import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ApiServicesService } from 'src/app/support/api-services.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-cat2',
  templateUrl: './cat2.component.html',
  styleUrls: ['./cat2.component.css']
})
export class Cat2Component {
  url = 'https://testkavyadigitalsolution.com/shopfindy/api/admin/uploads/'
  email:any;
  pass:any;
  user_type: any;
  list_of_item: any;
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
  this.hot_deal();
      }
 
 hot_deal(){
  // Swal.fire({
  //   // title: 'Alert',
  //   text: 'Loading',
  //   icon: 'success',
  //   timer: 500
  // })
  let url = "hot_list5.php";
  this.api.get_data(url, {})
  .subscribe(async (res: any) => { 
    if(res['status'] == 1){
      this.list_of_item = res.result
    }
    else if(res['status'] == 0){
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

