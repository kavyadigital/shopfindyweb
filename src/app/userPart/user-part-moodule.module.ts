import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPartMooduleRoutingModule } from './user-part-moodule-routing.module';
import { BregisterComponent } from './bregister/bregister.component';
import { OtpComponent } from './otp/otp.component';
import { CompleteaccountComponent } from './completeaccount/completeaccount.component';
import { WelcompageComponent } from './welcompage/welcompage.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { IntroComponent } from './intro/intro.component';
import { IntroBComponent } from './intro-b/intro-b.component';
import { FormsModule } from '@angular/forms';
import { CompleteaccountbusinessComponent } from './completeaccountbusiness/completeaccountbusiness.component';

@NgModule({
  declarations: [
    BregisterComponent,
    OtpComponent,
    CompleteaccountComponent,
    WelcompageComponent,
    ForgetpassComponent,
    IntroComponent,
    IntroBComponent,
    CompleteaccountbusinessComponent
  ],
  imports: [
    CommonModule,
    UserPartMooduleRoutingModule,
    FormsModule,
  ]
})
export class UserPartMooduleModule { }
