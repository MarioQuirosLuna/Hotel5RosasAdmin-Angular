import { environment } from '../../../environments/enviroment-URL-API';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeasonsServiceService {

  constructor(private http: HttpClient) { }

  apiSeasonURL = '/Entity_Temporada/GetSeasons/';
  getSeasons(): Observable<any> {
    return this.http.get(environment.url + this.apiSeasonURL);
  }

  apiSeasonIDURL = '/Entity_Temporada/GetEspecificSeason/';
  getSeasonsId(_id : Number): Observable<any> {
    return this.http.get(environment.url + this.apiSeasonIDURL + _id);
  }

  apiSeasonCreateURL = '/Entity_Temporada/PostInsertSeason/';
  createSeason(season : any): Observable<any> {
    return this.http.post(environment.url + this.apiSeasonCreateURL, season);
  }

  apiSeasonPutURL = '/Entity_Temporada/PutSeason';
  putSeason(season : any): Observable<any> {
    return this.http.put(environment.url + this.apiSeasonPutURL, season);
  }

  apiSeasonDeleteURL = '/Entity_Temporada/DeleteSeason/';
  deleteSeason(id: Number): Observable<any> {
    return this.http.delete(environment.url + this.apiSeasonDeleteURL + id);
  }

}
