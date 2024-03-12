import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginRegisterHomeComponent } from './login-register-home/login-register-home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BregisterComponent } from './bregister/bregister.component';
import { OtpComponent } from './otp/otp.component';
import { CompleteaccountComponent } from './completeaccount/completeaccount.component';
import { WelcompageComponent } from './welcompage/welcompage.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { IntroComponent } from './intro/intro.component';
import { IntroBComponent } from './intro-b/intro-b.component';
import { CompleteaccountbusinessComponent } from './completeaccountbusiness/completeaccountbusiness.component';

const routes: Routes = [
{
    path: '',
    component: LoginRegisterHomeComponent,
    // canActivate: [authGuard],
    children: [
      {
        path: '',
        // canActivateChild: [authGuard],
        children: [
          { path: 'login', component: LoginComponent },
          { path: 'register', component: RegisterComponent },
          { path: 'bregister', component: BregisterComponent },
          { path: 'otp', component: OtpComponent },
          { path: 'completeac', component: CompleteaccountComponent },
          { path: 'completeac_b', component: CompleteaccountbusinessComponent },
          { path: 'welcome', component: WelcompageComponent },
          { path: 'forget', component: ForgetpassComponent },
          { path: 'intro', component: IntroComponent },
          { path: 'intro_b', component: IntroBComponent },
          { path: '', component: LoginComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPartMooduleRoutingModule { }
