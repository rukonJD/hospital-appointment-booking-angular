import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewAppointmentComponent } from './pages/new-appointment/new-appointment.component';
import { AppointmentListComponent } from './pages/appointment-list/appointment-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './pages/about/about.component';
import { DoctorComponent } from './pages/doctor/doctor.component';
import { ReviewComponent } from './pages/review/review.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogeComponent } from './pages/bloge/bloge.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/logout/signup.component';
import { AppointmentListUpdateComponent } from './pages/appointment-list-update/appointment-list-update.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    NewAppointmentComponent,
    AppointmentListComponent,
    DashboardComponent,
    AboutComponent,
    DoctorComponent,
    ReviewComponent,
    ContactComponent,
    BlogeComponent,
    LoginComponent,
    SignupComponent,
    AppointmentListUpdateComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
