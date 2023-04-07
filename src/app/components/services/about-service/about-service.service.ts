import { environment } from '../../../environments/enviroment-URL-API';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutServiceService {

  constructor(private http: HttpClient) { }

  apiURL = '/Entity_Pagina/GetAboutUsPage';
  apiGalleryURL = '/Entity_Galeria/getGalleryAboutUs';

  getAboutUsInfo(): Observable<any> {
    return this.http.get(environment.url + this.apiURL);
  }
  getGalleryAboutUsInfo(): Observable<any> {
    return this.http.get(environment.url + this.apiGalleryURL);
  }
}
