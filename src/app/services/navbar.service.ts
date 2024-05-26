import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  constructor (private http: HttpClient){}
  getNavBar(){
    return this.http.get('assets/master/navbar.json')
  }

}
