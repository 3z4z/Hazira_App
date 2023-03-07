import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { LeaveComponent } from './leave/leave.component';
import { MenuComponent } from './menu/menu.component';
import { ReportComponent } from './report/report.component';
import { ShiftPlanComponent } from './shift-plan/shift-plan.component';
import { TimeClockComponent } from './time-clock/time-clock.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'employee', component:EmployeeComponent},
  {path: 'menu', component:MenuComponent},
  {path: 'shift', component:ShiftPlanComponent},
  {path: 'time', component:TimeClockComponent},
  {path: 'report', component:ReportComponent},
  {path: 'leave', component:LeaveComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
