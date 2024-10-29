import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NewAppointmentComponent } from './pages/new-appointment/new-appointment.component';
import { AppointmentListComponent } from './pages/appointment-list/appointment-list.component';
import { AboutComponent } from './pages/about/about.component';
import { DoctorComponent } from './pages/doctor/doctor.component';
import { ReviewComponent } from './pages/review/review.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogeComponent } from './pages/bloge/bloge.component';
import { LoginComponent } from './pages/login/login.component';
import { AppointmentListUpdateComponent } from './pages/appointment-list-update/appointment-list-update.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'new',
    component:NewAppointmentComponent
  },
  {
    path:'list',
    component:AppointmentListComponent
  },
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"doctor",
    component:DoctorComponent
  },
  {
    path:"review",
    component:ReviewComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:"blog",
    component:BlogeComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"list/list-update/:id",
    component:AppointmentListUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
