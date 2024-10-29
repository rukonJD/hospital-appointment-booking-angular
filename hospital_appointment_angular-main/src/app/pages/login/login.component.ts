import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoginhttp } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{


  userForm : FormGroup =  new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  
  router = inject(Router);

  onLogin() {
    const formValue =  this.userForm.value;

    if(formValue.username == 'admin' && formValue.password == '112233') {
      this.router.navigateByUrl('dashboard')
    } else {
      alert('Wrong Credentilas')
    }


}
}
