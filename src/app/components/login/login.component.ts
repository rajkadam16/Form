import { Component } from '@angular/core';
import { FormBuilder, FormGroup, MinLengthValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  myForm!: FormGroup;
  constructor(private fb: FormBuilder) {}
  loginForm = this.fb.group({
    email: ['',[Validators.required, Validators.email]],
    password: ['',[Validators.required,Validators.minLength(8)]]
  });

  onSubmit(){
    console.log(this.loginForm.value);
    this.loginForm.reset();
  }
  get email() {
    return this.loginForm.controls['email'];
  }
  get password() {
    return this.loginForm.controls['password'];
  
  }

}
