import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
registerForm:FormGroup =new FormGroup ({
  fullName:new FormControl('',[Validators.required]),
  email:new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]),
  phoneNum: new FormControl('',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
  password:new FormControl('',[Validators.required,Validators.minLength(8)]),
  confirmPassword:new FormControl('',[Validators.required,Validators.minLength(8)]),
})
formValue:any;
onSubmit(){
this.formValue = this.registerForm
this.registerForm.reset()
}
}
