import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor (private http: HttpClient){}
  notification(){
    return this.http.get('assets/master/sys-notificaton.json')
  }

}
