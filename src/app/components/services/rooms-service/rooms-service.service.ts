import { environment } from '../../../environments/enviroment-URL-API';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomsTypeServiceService {

  constructor(private http: HttpClient) { }

  apiRoomsTypesURL = '/Entity_TipoHabitacion/GetRoomTypes';
  apiRoomsURL = '/Entity_Habitacion/GetEstadoHabitacion';
  getRoomsType(): Observable<any> {
    return this.http.get(environment.url + this.apiRoomsTypesURL);
  }
  getRooms(): Observable<any> {
    return this.http.get(environment.url + this.apiRoomsURL);
  }
}
