import { environment } from '../../../environments/enviroment-URL-API';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UbicationServiceService {
  constructor(private http: HttpClient) {}

  apiURL = '/Entity_Pagina/getComoLlegar';

  getUbication(): Observable<any> {
    return this.http.get(environment.url+this.apiURL);
  }

  apiURLModifyUbication = '/Entity_Pagina/UpdateHowToGet';
  putUbication(ubication : any): Observable<any> {
    return this.http.put(environment.url + this.apiURLModifyUbication, ubication);
  }

}
