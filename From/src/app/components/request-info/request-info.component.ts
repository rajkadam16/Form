import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-request-info',
  templateUrl: './request-info.component.html',
  styleUrls: ['./request-info.component.css']
})
export class RequestInfoComponent {

  submitRequestInfo() {
    throw new Error('Method not implemented.');
    }

  requestFrom =this.fb.group({
    fullName:['',[Validators.required,Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
    email:['',[Validators.required,Validators.email]],
    address:['',Validators.required],
    city:['',Validators.required],
    phoneNumber:['',Validators.required,Validators.pattern("[0-9 ]{12}")],
    CRD:[]

    

  })
  rquestFrom: any;
  constructor(private fb: FormBuilder){
   }
   get fullName() {
    return this.rquestFrom.controls['fullName'];
  }
  get address(){
    return this.rquestFrom.controls['address'];
  }
  get city(){
    return this.rquestFrom.controls['city'];
  }
  get email(){
    return this.rquestFrom.controls['email'];
  }
  get phoneNumber(){
    return this.rquestFrom.controls['phoneNumber']
  }
  get CRD(){
    return this.rquestFrom.controls['CRD']
  }
}