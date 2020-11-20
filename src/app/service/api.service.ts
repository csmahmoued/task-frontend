import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserEvents } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  NUMVERFIY_URL="http://apilayer.net/api/validate?access_key=1d0f126b5ab9c12446129459126a0fab&number=";
  SAVE_USER_EVENT="http://localhost:8080/save-event";
  ALL_USER_EVENTS_URL="http://localhost:8080/all-events"
  constructor(private http:HttpClient) {

   }

   getNumverify(number:string):Observable<any>{

    return this.http.get(this.NUMVERFIY_URL+number+"&country_code=EG&format=1");
  }

  saveUserEvent(userEvent:UserEvents):Observable<UserEvents>{
    return this.http.post<UserEvents>(this.SAVE_USER_EVENT,userEvent);
  }
  getAllEvents():Observable<any[]>{
    return this.http.get<any[]>(this.ALL_USER_EVENTS_URL);
  }


}
