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
}
