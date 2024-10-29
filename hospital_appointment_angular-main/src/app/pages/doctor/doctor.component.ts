import { Component, OnInit } from '@angular/core';
import { MasterService } from 'src/app/service/master.service';
import { Doctor } from './doctor.model';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})


export class DoctorComponent implements OnInit {


  getTodaysDoctors() {
    this.master.getAllTodaysAppointment().subscribe((res: any) => {
      this.doctorList = res;
    },
      error => {
        alert('API error Occoured')
      })
  }

  getAllDoctors() {
    this.master.getAllDoctor().subscribe((res) => {
      this.doctorList = res;
    },
      error => {
        alert('API error Occoured')
      })
  }

  markDone(appointmentId: string) {

    this.master.markAppointmentDone(appointmentId).subscribe((res: any) => {
      this.getTodaysDoctors();
    },
      error => {
        alert('API error Occoured')
      })
  }



  doctorList: Doctor[] = [];
  constructor(private master: MasterService) {

  }
  ngOnInit(): void {
    this.getAllDoctors();
  }
}
