import { environment } from '../../../environments/enviroment-URL-API';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PublicityServiceService {
  constructor(private http: HttpClient) {}

  apiURL = '/Entity_Publicidad/GetPublicities';
  getPublicity(): Observable<any> {
    return this.http.get(environment.url+this.apiURL);
  }

  apiCreateURL = '/Entity_Publicidad/Insertpublicity/';
  postCreatePublicity(publicity : any): Observable<any> {
    return this.http.post(environment.url + this.apiCreateURL, publicity);
  }

  apiIdURL = '/Entity_Publicidad/GetEspecificPublicity/';
  getPublicityId(_id : Number): Observable<any> {
    return this.http.get(environment.url + this.apiIdURL + _id);
  }

  apiDeleteURL = '/Entity_Publicidad/DeletePublicity/';
  deletePublicity(id: Number): Observable<any> {
    return this.http.delete(environment.url + this.apiDeleteURL + id);
  }

  apiPutURL = '/Entity_Publicidad/Updateplublicity/';
  putPublicity(publicity : any): Observable<any> {
    return this.http.put(environment.url + this.apiPutURL, publicity);
  }

}
