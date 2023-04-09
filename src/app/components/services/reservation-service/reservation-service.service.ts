import { environment } from '../../../environments/enviroment-URL-API';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationServiceService {
  constructor(private http: HttpClient) {}

  apiURL = '/Entity_Reserva/GetReservations';
  getReservations(): Observable<any> {
    return this.http.get(environment.url+this.apiURL);
  }


}
