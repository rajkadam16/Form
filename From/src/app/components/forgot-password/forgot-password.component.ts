import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  forgotPasswordFrom =this.fb.group({
    email:['',[Validators.required,Validators.email]],
  })
  constructor(private fb: FormBuilder){
   }
  get email(){
    return this.forgotPasswordFrom.controls['email'];
  }
}

