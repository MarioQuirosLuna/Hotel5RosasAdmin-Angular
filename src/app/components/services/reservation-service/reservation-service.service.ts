import { environment } from '../../../environments/enviroment-URL-API';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationServiceService {
  constructor(private http: HttpClient) {}

  apiURL = '/Entity_Reserva/GetAllReservation';
  getReservations(): Observable<any> {
    return this.http.get(environment.url+this.apiURL);
  }

  apiIdURL = '/Entity_Reserva/GetUniqueReservation/';
  getIdReservation(id : Number): Observable<any> {
    return this.http.get(environment.url+this.apiIdURL + id);
  }

  apiDeleteURL = '/Entity_Reserva/PutEliminarReserva/';
  deleteReservation(id : Number): Observable<any> {
    return this.http.delete(environment.url+this.apiDeleteURL + id);
  }



}
