import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor (private http: HttpClient){}
  getNavBar(){
    return this.http.get('assets/navDb.json')
  }

}
