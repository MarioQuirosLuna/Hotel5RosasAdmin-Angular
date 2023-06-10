import { environment } from '../../../environments/enviroment-URL-API';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomServiceService {
  constructor(private http: HttpClient) { }

  apiRoomURL = '/Entity_Habitacion/GetRoomStatus/';
  getRoom(): Observable<any> {
    return this.http.get(environment.url + this.apiRoomURL);
  }

  apiRoomIdURL = '/Entity_Habitacion/GetOneRoom/';
  getRoomId(id : Number): Observable<any> {
    return this.http.get(environment.url + this.apiRoomIdURL + id);
  }

  apiRoomInsertURL = '/Entity_Habitacion/InsertRoom';
  insertRoom(room : any): Observable<any> {
    return this.http.post(environment.url + this.apiRoomInsertURL, room);
  }

  apiRoomDeleteURL = '/Entity_Habitacion/PutEliminarRoom/';
  deleteRoom(id : Number): Observable<any> {
    return this.http.delete(environment.url + this.apiRoomDeleteURL + id);
  }

  apiRoomUpdateURL = '/Entity_Habitacion/UpdateRoom';
  putRoom(room : any): Observable<any> {
    return this.http.put(environment.url + this.apiRoomUpdateURL, room);
  }

}
