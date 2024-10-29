import { Component, OnInit, Input } from '@angular/core';
import { Data, Router } from '@angular/router';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrls: ['./new-appointment.component.css']
})
export class NewAppointmentComponent implements OnInit {

 @Input() id = '';

  appointmentObj: any = {
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

  constructor(private master: MasterService,private router:Router){}

  ngOnInit(): void {
    console.log(this.id);
  }

  onSaveAppointment() {
    this.master.createNew(this.appointmentObj).subscribe((res:any)=>{
     alert("added successful");
     this.router.navigate(['../list'])
  })
}
  
}
