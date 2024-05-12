import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-request-info',
  templateUrl: './request-info.component.html',
  styleUrls: ['./request-info.component.css']
})
export class RequestInfoComponent {
  requestFrom =this.fb.group({
  fullName:['',[Validators.required,Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
  email:['',[Validators.required,Validators.email]],
  phoneNumber:['',Validators.required,Validators.pattern("[0-9 ]{12}")],
  address:['',Validators.required],
  city:['',Validators.required],
  state:['',Validators.required],
  CRD:[]
  })
  constructor(private fb: FormBuilder){
   }
   get fullName() {
    return this.requestFrom.controls['fullName'];
  }
  get address(){
    return this.requestFrom.controls['address'];
  }
  get city(){
    return this.requestFrom.controls['city'];
  }
  get email(){
    return this.requestFrom.controls['email'];
  }
  get state(){
    return this.requestFrom.controls['state'];
  }
  get phoneNumber(){
    return this.requestFrom.controls['phoneNumber']
  }
  get CRD(){
    return this.requestFrom.controls['CRD']
  }
}