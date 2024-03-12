import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { StoresComponent } from './stores/stores.component';
const routes: Routes = [
  // {
  //   path: 'emplist',
  //   component: EmplistComponent,
  //   canActivate: [AuthGuard]
  // },
  // { path: '', component: EmplistComponent,canActivate: [AuthGuard]},
  { path: 'profile',   component: ProfileComponent},
  { path: 'about',   component: AboutComponent},
  { path: 'addmoney',   component: AddmoneyComponent},
  { path: 'share',   component: SharmeComponent},
  { path: 'acsettings',   component: AccountsettingsComponent},
  { path: 'activity',   component: ActivityComponent},
  { path: 'contactus',   component: ContactusComponent},
  { path: 'newsrelease',   component: NewsreleaseComponent},
  { path: 'addcard',   component: AddcardComponent},
  { path: 'FAQ',   component: FAQComponent},
  { path: 'howworkapp',   component: HowworkappComponent},
  { path: 'tutorial',   component: TutorialComponent},
  { path: 'history',   component: HistoryComponent},
  { path: 'stores',   component: StoresComponent},
  
  {
    path: '',
    // canActivate: [AuthGuard],
    loadChildren: () => import('./userPart/user-part-moodule-routing.module').then(m => m.UserPartMooduleRoutingModule),
    // loadChildren: () => import('./dashboard/dashboard-module-routing.module').then(m => m.DashboardModuleRoutingModule),
  },

  {
    path: 'home',
    // canActivate: [AuthGuard],
   loadChildren: () => import('./dashboard/dashboard-module-routing.module').then(m => m.DashboardModuleRoutingModule),
    // loadChildren: () => import('./userPart/user-part-moodule-routing.module').then(m => m.UserPartMooduleRoutingModule),
  },


  // { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
