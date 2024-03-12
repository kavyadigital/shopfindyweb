import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { Cat1Component } from './cat1/cat1.component';
import { Cat2Component } from './cat2/cat2.component';
import { Cat3Component } from './cat3/cat3.component';
import { Cat4Component } from './cat4/cat4.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        // canActivateChild: [authGuard],
        children: [
          { path: '', component: DetailsComponent },
          { path: 'cat1', component: Cat1Component },
          { path: 'cat2', component: Cat2Component },
          { path: 'cat3', component: Cat3Component },
          { path: 'cat4', component: Cat4Component },
     
        ]
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardModuleRoutingModule { }
