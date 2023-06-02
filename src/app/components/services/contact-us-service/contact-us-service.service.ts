import { environment } from '../../../environments/enviroment-URL-API';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactUsServiceService {
  constructor(private http: HttpClient) { }

  apiContactUsURL = '/Entity_Pagina/GetInformationContactUs';
  getContactUs(): Observable<any> {
    return this.http.get(environment.url + this.apiContactUsURL);
  }

  apiURLModifyContactUs = '/Entity_Pagina/UpdateInformationContacUs';
  putContactUs(object : any): Observable<any> {
    return this.http.put(environment.url + this.apiURLModifyContactUs, object);
  }
}
