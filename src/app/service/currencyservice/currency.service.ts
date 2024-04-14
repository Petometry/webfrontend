import {Injectable} from '@angular/core';
import {HttpService} from "../httpservice/http.service";
import {Observable} from "rxjs";
import {GeocoinsModel} from "../../model/currency/geocoins.model";
import {PetfoodsModel} from "../../model/currency/petfoods.model";


@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private httpService:HttpService) { }

  getCurrencies():Observable<GeocoinsModel>{

    return this.httpService.sendGetRequest("currency", "geocoins");
  }

  getPetfoods():Observable<PetfoodsModel>{

    return this.httpService.sendGetRequest("currency", "petfoods");
  }
}
