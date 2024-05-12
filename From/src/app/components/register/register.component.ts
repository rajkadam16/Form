import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


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
    confirmPassword:['',Validators.required],
    phonenumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]  

  })
  constructor(private fb: FormBuilder){
   }
   get fullName() {
    return this.registerFrom.controls['fullName'];
  }
  get email(){
    return this.registerFrom.controls['email'];
  }
  get Phonenumber(){
    return this.registerFrom.controls['phonenumber'];
  }
  get password(){
    return this.registerFrom.controls['password'];
  }
  get confirmPassword(){
    return this.registerFrom.controls['confirmPassword']
  }
}
