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
  apiRoomTypeByIdURL = '/Entity_TipoHabitacion/GetRoomTypesById';
  apiRoomTypeUpdateURL = '/Entity_TipoHabitacion/PutRoomTypesById';
  apiRoomGetAvailabilityURL = '/Entity_Habitacion/GetAvaibilityRoom';
  getRoomsType(): Observable<any> {
    return this.http.get(environment.url + this.apiRoomsTypesURL);
  }
  getRooms(): Observable<any> {
    return this.http.get(environment.url + this.apiRoomsURL);
  }
  getRoomTypeById(id: Number): Observable<any> {
    return this.http.get(environment.url + this.apiRoomTypeByIdURL + '/' + id);
  }
  apiRoomTypeUpdate(typeRoom: any): Observable<any> {
    return this.http.put(environment.url + this.apiRoomTypeUpdateURL, typeRoom);
  }
  apiRoomGetAvailability(startDate: String, endDate: String, roomType: Number): Observable<any> {
    return this.http.get(environment.url + this.apiRoomGetAvailabilityURL + '/' + startDate + '/' + endDate + '/' + roomType);
  }
}
