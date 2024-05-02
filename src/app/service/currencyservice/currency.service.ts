import {Injectable} from '@angular/core';
import {HttpService} from "../httpservice/http.service";
import {Observable} from "rxjs";
import {GeoCoinsModel} from "../../model/currency/geoCoinsModel";
import {PetfoodsModel} from "../../model/currency/petfoods.model";


@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private httpService:HttpService) { }

  getCurrencies():Observable<GeoCoinsModel>{

    return this.httpService.sendGetRequest("currency", "geocoins");
  }

  getPetfoods():Observable<PetfoodsModel>{

    return this.httpService.sendGetRequest("currency", "petfoods");
  }
}
