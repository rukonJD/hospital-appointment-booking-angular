import { HttpParams } from '@angular/common/http';
import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from 'src/app/service/master.service';
import { Appointment } from '../new-appointment/new-appointment.model';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit{

  id!:string;

  appointmentOb: any = {
    
    "id":"",
    "name": "",
    "mobileNo": "",
    "city": "",
    "age": 0,
    "gender": "",
    "appointmentDate": "2023-12-22T05:50:31.728Z",
    "appointmentTime": "",
    "isFirstVisit": true,
    "naration": ""
  };


  appointmentList: Appointment[] = [];
  
  constructor(private master: MasterService,private router:Router){

  }

  ngOnInit(): void {
    this.getTodaysAppointments();
  }

  getTodaysAppointments() {
    this.master.getAllTodaysAppointment().subscribe((res:any) => {
      this.appointmentList =  res;
    },
    error=> {
      alert('API error Occoured')
    })
  }

  

  markDone(appointmentId:string) {

    this.master.markAppointmentDone(appointmentId).subscribe((res:any) => {
      this.getTodaysAppointments();
    },
    error=> {
      alert('API error Occoured')
    })
  }

  

  click(id:string){
    this.id=id;
  }
  deleteData(id:string){
    this.master.deleteAppointment(id).subscribe(res=>{
      alert("Delete Successful");
      this.getTodaysAppointments()
    })
  }

}
