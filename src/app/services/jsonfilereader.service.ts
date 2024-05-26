import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonfilereaderService {
  constructor (private http: HttpClient){}
  parseJsonFile(path:string){
    return this.http.get(path)
  }

}
