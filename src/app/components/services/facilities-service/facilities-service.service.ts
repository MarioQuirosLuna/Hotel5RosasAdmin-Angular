import { environment } from '../../../environments/enviroment-URL-API';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacilitiesServiceService {
  constructor(private http: HttpClient) {}

  apiURL = '/Entity_Pagina/getFacilityData';
  getHotelFacilities(): Observable<any> {
    return this.http.get(environment.url+this.apiURL);
  }

  apiRoomsURL = '/Entity_TipoHabitacion/GetRoomTypes';
  getRoomsType(): Observable<any> {
    return this.http.get(environment.url+this.apiRoomsURL);
  }

  apiFacilityURL = '/Entity_Pagina/GetEasePage';
  getFacility(): Observable<any> {
    return this.http.get(environment.url + this.apiFacilityURL);
  }

  apiDeleteFacilityURL = '/Entity_Facilidad/PutEliminarFacilidad/';
  deleteFacility(id : Number): Observable<any> {
    return this.http.delete(environment.url + this.apiDeleteFacilityURL + id);
  }

  apiIDFacilityURL = '/Entity_Facilidad/GetOneFaclity/';
  getIDFacility(id : Number): Observable<any> {
    return this.http.get(environment.url + this.apiIDFacilityURL + id);
  }

  modifyFacility = '/Entity_Facilidad/UpdateFacility';
  putFacility(object : any): Observable<any> {
    return this.http.put(environment.url + this.modifyFacility, object);
  }

  apiCreateFacility = '/Entity_Facilidad/InsertFacility';
  createFacility(object : any): Observable<any> {
    return this.http.post(environment.url + this.apiCreateFacility, object);
  }

}
