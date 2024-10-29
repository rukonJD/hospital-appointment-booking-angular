import { Component, OnInit } from '@angular/core';
import { Appointmentt } from '../appointment-list/appointment-list.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-appointment-list-update',
  templateUrl: './appointment-list-update.component.html',
  styleUrls: ['./appointment-list-update.component.css']
})
export class AppointmentListUpdateComponent implements OnInit {
  formValue!: FormGroup;
  showData!: Appointmentt; // Change to single appointment
  id!: string;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private master: MasterService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id')!;
      this.getData();
    });

    this.formValue = this.formBuilder.group({
      name: [''],
      mobileNo: [''],
      city: [''],
      age: [''],
      gender: [''],
      appointmentDate: [''],
      appointmentTime: [''],
      isFirstVisit: [false],
      naration: ['']
    });
  }

  getData() {
    this.master.getAllTodaysAppointmentById(this.id).subscribe((res: Appointmentt) => {
      this.showData = res; // Set showData to the received appointment
      this.showInInputField();
    });
  }

  showInInputField() {
    if (this.showData) {
      this.formValue.patchValue({
        name: this.showData.name,
        mobileNo: this.showData.mobileNo,
        city: this.showData.city,
        age: this.showData.age,
        gender: this.showData.gender,
        appointmentDate: this.showData.appointmentDate,
        appointmentTime: this.showData.appointmentTime,
        isFirstVisit: this.showData.isFirstVisit,
        naration: this.showData.naration
      });
    }
  }

  updateAppointment() {
    if (this.formValue.valid) {
      // Call the service to update the appointment here
      this.master.updateAppointment(this.id, this.formValue.value).subscribe(response => {
        alert("update Successsful")
        this.router.navigate(['../list']); // Redirect after successful update
      }, error => {
        console.error('Error updating appointment', error);
      });
    }
  }


}
