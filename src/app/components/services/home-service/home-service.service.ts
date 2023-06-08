import { environment } from '../../../environments/enviroment-URL-API';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
  constructor(private http: HttpClient) {}

  apiURL = '/Entity_Pagina/GetHomePage';
  getHomeInfo(): Observable<any> {
    return this.http.get(environment.url+this.apiURL);
  }

  apiURLTodayHotel = '/Entity_Habitacion/GetRoomStatusToday';
  getHotelToday(): Observable<any> {
    return this.http.get(environment.url+this.apiURLTodayHotel);
  }

  apiURLModifyHome = '/Entity_Pagina/UpdateHome/';
  putHome(home : any): Observable<any> {
    return this.http.put(environment.url + this.apiURLModifyHome, home);
  }

}
