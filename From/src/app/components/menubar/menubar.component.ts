import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent  {
  data:any []=[]
constructor(private menuBar: AuthService){
  this.menuBar.getNavBar().subscribe((res:any)=>{
    this.data =res
  })
}
}
