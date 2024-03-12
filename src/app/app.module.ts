import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './userPart/login/login.component';
import { RegisterComponent } from './userPart/register/register.component';
import { HomeComponent } from './dashboard/home/home.component';
import { DetailsComponent } from './dashboard/details/details.component';
import { LoginRegisterHomeComponent } from './userPart/login-register-home/login-register-home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { AddmoneyComponent } from './addmoney/addmoney.component';
import { SharmeComponent } from './sharme/sharme.component';
import { AccountsettingsComponent } from './accountsettings/accountsettings.component';
import { ActivityComponent } from './activity/activity.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NewsreleaseComponent } from './newsrelease/newsrelease.component';
import { AddcardComponent } from './addcard/addcard.component';
import { FAQComponent } from './faq/faq.component';
import { HowworkappComponent } from './howworkapp/howworkapp.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { HistoryComponent } from './history/history.component';
import { OtppageComponent } from './otppage/otppage.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DashboardModuleModule } from './dashboard/dashboard-module.module';
import { StoresComponent } from './stores/stores.component';
import { UserPartMooduleModule } from './userPart/user-part-moodule.module';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DetailsComponent,
    LoginRegisterHomeComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    AboutComponent,
    AddmoneyComponent,
    SharmeComponent,
    AccountsettingsComponent,
    ActivityComponent,
    ContactusComponent,
    NewsreleaseComponent,
    AddcardComponent,
    FAQComponent,
    HowworkappComponent,
    TutorialComponent,
    HistoryComponent,
    OtppageComponent,
    StoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,
    DashboardModuleModule,
    UserPartMooduleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
