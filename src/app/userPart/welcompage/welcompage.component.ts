import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServicesService } from 'src/app/support/api-services.service';

@Component({
  selector: 'app-welcompage',
  templateUrl: './welcompage.component.html',
  styleUrls: ['./welcompage.component.css']
})
export class WelcompageComponent {
  constructor( public api:ApiServicesService, 
    private route: ActivatedRoute,
    private router: Router)
    {}
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
