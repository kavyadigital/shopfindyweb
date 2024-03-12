import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ApiServicesService } from 'src/app/support/api-services.service';

@Component({
  selector: 'app-intro-b',
  templateUrl: './intro-b.component.html',
  styleUrls: ['./intro-b.component.css']
})
export class IntroBComponent {

  user_ac_status:any;
  user_temp:any;
  user_type:any;
  user:any;
  constructor( public api:ApiServicesService, 
    private route: ActivatedRoute,
    private router: Router)
    {
      const ac_status = new BehaviorSubject(JSON.parse(localStorage.getItem('ac_status')!));
      this.user_ac_status = ac_status.value;
      const user_temp = new BehaviorSubject(JSON.parse(localStorage.getItem('user_temp')!));
      this.user_temp = user_temp.value;
      const user_type = new BehaviorSubject(JSON.parse(localStorage.getItem('user_type')!));
      this.user_type = user_type.value;
     const user = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
      this.user = user.value;

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
    neext(){
      this.router.navigateByUrl('completeac_b')
    }
}
