import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../pages/doctor/doctor.model';
import { Appointment } from '../pages/new-appointment/new-appointment.model';
import { Appointmentt } from '../pages/appointment-list/appointment-list.model';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
 
  apiEndPint: string = "'https://freeapi.miniprojectideas.com/api/HospitalAppointment/"
  constructor(private http: HttpClient) { }

  createNew(obj:any): Observable<any> {
    return this.http.post("http://localhost:3000/appointment", obj)
  }

 
  getAllTodaysAppointment(): Observable<any>  {
    return this.http.get< Observable<any> >("http://localhost:3000/appointment")
  } 
  getAllDoctor(): Observable<Doctor[]>  {
    return this.http.get<Doctor[]>("http://localhost:3000/doctors")
  }
  // updateAppointment(appointment:Appointmentt): Observable <Appointment> {
  //   return this.http.put<Appointment>(`http://localhost:3000/appointment/${appointment.id}`,appointment)
  // }
  markAppointmentDone(appintmentId:string): Observable<any>  {
    return this.http.get< Observable<any> >(this.apiEndPint + "MarkAppointmentDone?appointmentId=" + appintmentId)
  } 

  getAllTodaysAppointmentById(id:string): Observable<Appointmentt>  {
    return this.http.get<Appointmentt>("http://localhost:3000/appointment/"+id)
  } 

  updateAppointment(id: string, data: any): Observable<any> {
    return this.http.put(`http://localhost:3000/appointment/${id}`, data);
  }
 
  deleteAppointment(id: string): Observable<any> {
    return this.http.delete(`http://localhost:3000/appointment/${id}`);
  }
}
