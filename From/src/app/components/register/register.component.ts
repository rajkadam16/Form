import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { User } from 'src/app/interfaces/auth';
import { AuthService } from 'src/app/services/auth.service';
import { passwordMatchValidator } from 'src/app/shared/password-match.directive';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
submitDetails() {
throw new Error('Method not implemented.');
}

  registerFrom =this.fb.group({
    fullName:['',[Validators.required,Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
    email:['',[Validators.required,Validators.email]],
    password:['',Validators.required],
    confirmPassword:['',Validators.required]

  })
  constructor(private fb: FormBuilder){
   }
   get fullName() {
    return this.registerFrom.controls['fullName'];
  }
  get email(){
    return this.registerFrom.controls['email'];
  }
  get password(){
    return this.registerFrom.controls['password'];
  }
  get confirmPassword(){
    return this.registerFrom.controls['confirmPassword']
  }
}
