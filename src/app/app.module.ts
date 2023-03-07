import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { LeaveComponent } from './leave/leave.component';
import { MenuComponent } from './menu/menu.component';
import { ReportComponent } from './report/report.component';
import { ShiftPlanComponent } from './shift-plan/shift-plan.component';
import { TimeClockComponent } from './time-clock/time-clock.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    HomeComponent,
    LeaveComponent,
    MenuComponent,
    ReportComponent,
    ShiftPlanComponent,
    TimeClockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
