import { Component } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ApiServicesService } from 'src/app/support/api-services.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  np: any;
  cnp: any;
  user_id: any;
  email: any;
  mono: any;
  pass: any;
  name: any;
  lname: any;
  id: any;
  list_of_state: any;
  ac_status: any;
  address: any;
  city: any;
  created: any;
  state: any;
  user_type: any;
  b_user: any;
  b_land: any;
  constructor(public api: ApiServicesService,
    private route: ActivatedRoute,
    private router: Router) {
    this.state_list();
      const user_type = new BehaviorSubject(JSON.parse(localStorage.getItem('user_type')!));
      this.user_type = user_type.value;
      console.log(this.user_type)
      if(this.user_type == 'u'){
        this.myProfile();
      }
      else if(this.user_type == 'b'){
        this.myProfile_b();
      }
  }
  user_details() {
    const user = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
    this.user_id = user.value;
    const user_type = new BehaviorSubject(JSON.parse(localStorage.getItem('user_type')!));
    this.user_type = user_type;
  }
  state_list() {
    this.user_details()
    let url = "state_list.php";
    this.api.get_data(url, { 'user_id': this.user_id })
      .subscribe(async (res: any) => {
        if (res['status'] == 1) {
          this.list_of_state = res['result']
        }
        else if (res['status'] == 0) {
          // Swal.fire({
          //   title: 'Alert',
          //   text: 'Please Check Your Details!',
          //   icon: 'error',
          //   timer: 2000
          // })
        }
        // else {
        //   Swal.fire({
        //     title: 'Alert',
        //     text: 'Service Error!',
        //     icon: 'error',
        //     timer: 2000
        //   })
        // }
      }, (err: any) => {
        console.log(err);
      });

  }
  myProfile() {
    this.user_details()

  let url = "getprofileforcomplete.php";
  this.api.get_data(url, { 'user_id': this.user_id })
    .subscribe(async (res: any) => {
      if (res['status'] == 1) {
        this.email = res['result'][0]['email'];
        this.mono = res['result'][0]['mobile'];
        this.pass = res['result'][0]['pass'];
        this.name = res['result'][0]['name'];
        this.lname = res['result'][0]['last_name'];
        this.ac_status = res['result'][0]['ac_status'];
        this.address = res['result'][0]['address'];
        this.city = res['result'][0]['city'];
        this.created = res['result'][0]['created'];
        this.id = res['result'][0]['id'];
        this.state = res['result'][0]['state'];
        // this.user_type = res['result'][0]['user_type'];
      }
      else if (res['status'] == 0) {
        Swal.fire({
          title: 'Alert',
          text: 'Please Check Your Details!',
          icon: 'error',
          timer: 2000
        })
      }
      else {
        // Swal.fire({
        //   title: 'Alert',
        //   text: 'Service Error!',
        //   icon: 'error',
        //   timer: 2000
        // })
      }
    }, (err: any) => {
      console.log(err);
    });
}
myProfile_b(){
  let url = "getprofileforcomplete_b.php";
  this.api.get_data(url, { 'user_id': this.user_id })
    .subscribe(async (res: any) => {
      if (res['status'] == 1) {
        this.email = res['result'][0]['b_email'];
        this.mono = res['result'][0]['b_mono'];
        this.b_land = res['result'][0]['b_land'];
        this.pass = res['result'][0]['b_pass'];
        this.name = res['result'][0]['business_name'];
        this.b_user = res['result'][0]['b_user'];
        this.ac_status = res['result'][0]['ac_status'];
        this.address = res['result'][0]['b_address'];
        this.city = res['result'][0]['b_city'];
        this.created = res['result'][0]['created'];
        this.id = res['result'][0]['id'];
        this.state = res['result'][0]['b_satate'];
      }
      else if (res['status'] == 0) {
        Swal.fire({
          title: 'Alert',
          text: 'Please Check Your Details!',
          icon: 'error',
          timer: 2000
        })
      }
      else {
        // Swal.fire({
        //   title: 'Alert',
        //   text: 'Service Error!',
        //   icon: 'error',
        //   timer: 2000
        // })
      }
    }, (err: any) => {
      console.log(err);
    });
}



  update(name: any, lname: any, mono: any, email: any, address: any, city: any, state: any) {
    this.myProfile();
    if (name == undefined || name == null || name == '') {
      Swal.fire({
        title: 'Error!',
        text: 'Please Enter Your Name',
        icon: 'error',
        confirmButtonText: 'Cool',
        timer: 1500
      })
      return
    }
    if (lname == undefined || lname == null || lname == '') {
      Swal.fire({
        title: 'Error!',
        text: 'Please Enter Your Last Name',
        icon: 'error',
        confirmButtonText: 'Cool',
        timer: 1500
      })
      return
    }

    if (mono == undefined || mono == null || mono == '') {
      Swal.fire({
        title: 'Error!',
        text: 'Please Enter Your mobile number',
        icon: 'error',
        confirmButtonText: 'Cool',
        timer: 1500
      })
      return
    }


    if (email == undefined || email == null || email == '') {
      Swal.fire({
        title: 'Error!',
        text: 'Please Enter Your Email',
        icon: 'error',
        confirmButtonText: 'Cool',
        timer: 1500
      })
      return
    }

    if (address == undefined || address == null || address == '') {
      Swal.fire({
        title: 'Error!',
        text: 'Please Enter Your Address',
        icon: 'error',
        confirmButtonText: 'Cool',
        timer: 1500
      })
      return
    }
    if (city == undefined || city == null || city == '') {
      Swal.fire({
        title: 'Error!',
        text: 'Please Enter Your City',
        icon: 'error',
        confirmButtonText: 'Cool',
        timer: 1500
      })
      return
    }

    if (state == undefined || state == null || state == '') {
      Swal.fire({
        title: 'Error!',
        text: 'Please Enter Your State',
        icon: 'error',
        confirmButtonText: 'Cool',
        timer: 1500
      })
      return
    }
    let url = "updateprofile.php";
    this.api.get_data(url, {
      'user_id_t': this.user_id,
      'name': name,
      'lname': lname,
      'email': email,
      'mono': mono,
      'address': address,
      'city': city,
      'state': state
    })
      .subscribe(async (res: any) => {
        if (res['status'] == 1) {
          Swal.fire({
            title: 'success',
            text: 'Successfully updated',
            icon: 'success',
            timer: 2000
          })
          this.myProfile();
          this.user_details();
        }
        else if (res['status'] == 0) {
          Swal.fire({
            title: 'Alert',
            text: 'Failed To update!',
            icon: 'error',
            timer: 2000
          })
        }
        else {
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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// name,b_user,mono,b_land,email,address,city,state
update_b(name: any, b_user: any, mono: any,b_land:any, email: any, address: any, city: any, state: any) {
  // this.myProfile();
  if (name == undefined || name == null || name == '') {
    Swal.fire({
      title: 'Error!',
      text: 'Please Enter Business name',
      icon: 'error',
      confirmButtonText: 'Cool',
      timer: 1500
    })
    return
  }
  if (b_user == undefined || b_user == null || b_user == '') {
    Swal.fire({
      title: 'Error!',
      text: 'Please Enter Business Owner Name',
      icon: 'error',
      confirmButtonText: 'Cool',
      timer: 1500
    })
    return
  }

  if (mono == undefined || mono == null || mono == '') {
    Swal.fire({
      title: 'Error!',
      text: 'Please Enter Your mobile number',
      icon: 'error',
      confirmButtonText: 'Cool',
      timer: 1500
    })
    return
  }

  if (b_land == undefined || b_land == null || b_land == '') {
    Swal.fire({
      title: 'Error!',
      text: 'Please Enter Your Landline number',
      icon: 'error',
      confirmButtonText: 'Cool',
      timer: 1500
    })
    return
  }


  if (email == undefined || email == null || email == '') {
    Swal.fire({
      title: 'Error!',
      text: 'Please Enter Your Email',
      icon: 'error',
      confirmButtonText: 'Cool',
      timer: 1500
    })
    return
  }

  if (address == undefined || address == null || address == '') {
    Swal.fire({
      title: 'Error!',
      text: 'Please Enter Your Address',
      icon: 'error',
      confirmButtonText: 'Cool',
      timer: 1500
    })
    return
  }
  if (city == undefined || city == null || city == '') {
    Swal.fire({
      title: 'Error!',
      text: 'Please Enter Your City',
      icon: 'error',
      confirmButtonText: 'Cool',
      timer: 1500
    })
    return
  }

  if (state == undefined || state == null || state == '') {
    Swal.fire({
      title: 'Error!',
      text: 'Please Enter Your State',
      icon: 'error',
      confirmButtonText: 'Cool',
      timer: 1500
    })
    return
  }
  let url = "updateprofile_b.php";
  this.api.get_data(url, {
    'user_id_t':this.user_id,
    'business_name':name,
    'b_user':b_user,
    'b_email':email,
    'b_mono':mono,
    'b_land':b_land,
    'b_address':address,
    'b_city':city,
    'b_satate':state
  })
    .subscribe(async (res: any) => {
      if (res['status'] == 1) {
        Swal.fire({
          title: 'success',
          text: 'Successfully updated',
          icon: 'success',
          timer: 2000
        })
        // this.myProfile();
      }
      else if (res['status'] == 0) {
        Swal.fire({
          title: 'Alert',
          text: 'Failed To update!',
          icon: 'error',
          timer: 2000
        })
      }
      else {
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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  cp(np: any, cnp: any) {
    if (np == undefined || np == null || np == '') {
      Swal.fire({
        title: 'Error!',
        text: 'Please Enter New Password',
        icon: 'error',
        confirmButtonText: 'Cool',
        timer: 1500
      })
      return
    }

    if (cnp == undefined || cnp == null || cnp == '') {
      Swal.fire({
        title: 'Error!',
        text: 'Please Enter Confirm New Password',
        icon: 'error',
        confirmButtonText: 'Cool',
        timer: 1500
      })
      return
    }

    if (np != cnp) {
      Swal.fire({
        title: 'Error!',
        text: 'Password Not Matched',
        icon: 'error',
        confirmButtonText: 'Cool',
        timer: 1500
      })
      return
    }
    let url = "updatepassword.php";
    this.api.get_data(url, {
      'user_id': this.user_id,
      'np': np,
      'cnp': cnp
    })
      .subscribe(async (res: any) => {
        if (res['status'] == 1) {
          this.np = '';
          this.cnp = '';
          Swal.fire({
            title: 'success',
            text: 'Successfully updated',
            icon: 'success',
            timer: 2000
          })
          this.myProfile();
        }
        else if (res['status'] == 0) {
          Swal.fire({
            title: 'Alert',
            text: 'Failed To update!',
            icon: 'error',
            timer: 2000
          })
        }
        else {
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

  cp_b(np: any, cnp: any) {
    if (np == undefined || np == null || np == '') {
      Swal.fire({
        title: 'Error!',
        text: 'Please Enter New Password',
        icon: 'error',
        confirmButtonText: 'Cool',
        timer: 1500
      })
      return
    }

    if (cnp == undefined || cnp == null || cnp == '') {
      Swal.fire({
        title: 'Error!',
        text: 'Please Enter Confirm New Password',
        icon: 'error',
        confirmButtonText: 'Cool',
        timer: 1500
      })
      return
    }

    if (np != cnp) {
      Swal.fire({
        title: 'Error!',
        text: 'Password Not Matched',
        icon: 'error',
        confirmButtonText: 'Cool',
        timer: 1500
      })
      return
    }
    let url = "updatepassword_b.php";
    this.api.get_data(url, {
      'user_id': this.user_id,
      'np': np,
      'cnp': cnp
    })
      .subscribe(async (res: any) => {
        if (res['status'] == 1) {
          this.np = '';
          this.cnp = '';
          Swal.fire({
            title: 'success',
            text: 'Successfully updated',
            icon: 'success',
            timer: 2000
          })
          // this.myProfile();
        }
        else if (res['status'] == 0) {
          Swal.fire({
            title: 'Alert',
            text: 'Failed To update!',
            icon: 'error',
            timer: 2000
          })
        }
        else {
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
