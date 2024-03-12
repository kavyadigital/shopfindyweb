import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardModuleRoutingModule } from './dashboard-module-routing.module';
import { Cat1Component } from './cat1/cat1.component';
import { Cat2Component } from './cat2/cat2.component';
import { Cat3Component } from './cat3/cat3.component';
import { Cat4Component } from './cat4/cat4.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    Cat1Component,
    Cat2Component,
    Cat3Component,
    Cat4Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    DashboardModuleRoutingModule
  ]
})
export class DashboardModuleModule { }
