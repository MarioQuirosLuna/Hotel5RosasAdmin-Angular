import { environment } from '../../../environments/enviroment-URL-API';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PromotionServiceService {
  constructor(private http: HttpClient) { }

  apiPromotionURL = '/Entity_OfertaTemporada/GetAllSeasonOfer';
  getPromotion(): Observable<any> {
    return this.http.get(environment.url + this.apiPromotionURL);
  }

  apiCreatePromotionURL = '/Entity_OfertaTemporada/InsertSeasonOffer/';
  postCreatePromotion(promotion : any): Observable<any> {
    return this.http.post(environment.url + this.apiCreatePromotionURL, promotion);
  }

  apiPromotionIDURL = '/Entity_OfertaTemporada/GetEspecificSeasonOffer/';
  getPromotionId(_id : Number): Observable<any> {
    return this.http.get(environment.url + this.apiPromotionIDURL + _id);
  }

  apiPromotionDeleteURL = '/Entity_OfertaTemporada/DeleteSeasonOffer/';
  deletePromotion(id: Number): Observable<any> {
    return this.http.delete(environment.url + this.apiPromotionDeleteURL + id);
  }

  apiPromotionPutURL = '/Entity_OfertaTemporada/UpdateSeasonOffer/';
  putPromotion(promotion : any): Observable<any> {
    return this.http.put(environment.url + this.apiPromotionPutURL, promotion);
  }


}
