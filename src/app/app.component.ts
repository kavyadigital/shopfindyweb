import { Component, Optional } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularNew';
  user: any;
  user_login_status: any;
  user_ac_status: any;
  user_temp: any;
  user_type: any;
  constructor(private router: Router) {
      this.checklgon();
  }

  logout(){
    const user = localStorage.removeItem('user');
    const user_type = localStorage.removeItem('user_type');
    {
    this.router.navigateByUrl('login');
      window.location.reload();
    };
    }
    checklgon(){
      const ac_status = new BehaviorSubject(JSON.parse(localStorage.getItem('ac_status')!));
      this.user_ac_status = ac_status;
      const user_temp = new BehaviorSubject(JSON.parse(localStorage.getItem('user_temp')!));
      this.user_temp = user_temp;
      const user_type = new BehaviorSubject(JSON.parse(localStorage.getItem('user_type')!));
      this.user_type = user_type;
      const user = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
      this.user = user;
        if(this.user_ac_status.value == null || this.user_ac_status.value == '' || this.user_ac_status.value == undefined){
         if(this.user.value == null || this.user.value == '' || this.user.value == undefined){
          this.user_login_status = false;
          this.router.navigateByUrl('login');
        }
        else if(this.user.value != null || this.user.value != '' || this.user.value != undefined){
          this.user_login_status = true;
          this.router.navigateByUrl('home');
        }
      }
      else if(this.user_ac_status.value == '0' && this.user_temp.value != null || this.user_temp.value != undefined)
        {
          if(this.user.value == null || this.user.value == '' || this.user.value == undefined){
            this.user_login_status = false;
            if(this.user_type == 'u'){
              this.router.navigateByUrl('intro');
            }
            else if(this.user_type == 'b'){
              this.router.navigateByUrl('intro_b');
            }
          }
       }
       else if(this.user.value != null || this.user.value != '' || this.user.value != undefined){
        this.user_login_status = true;
        this.router.navigateByUrl('home');
       }
    }
      products(){
      this.router.navigateByUrl('products');
    }
    selectCategory(test:any){

      const navigationExtras: NavigationExtras = {
        state: {
          title:'Modern Living Room'
        }
      }
      this.router.navigateByUrl('categories', navigationExtras);
  
  
    }
}

