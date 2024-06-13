import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
 loginFrom :FormGroup = new FormGroup ({
  username: new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]),
  password:new FormControl('',[Validators.required])
 })
 formValue:any;
 onSubmit(){
  this.formValue = this.loginFrom
  this.loginFrom.reset();
 }
}
