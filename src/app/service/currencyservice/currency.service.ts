import {Injectable} from '@angular/core';
import {HttpService} from "../httpservice/http.service";
import {Observable} from "rxjs";
import {Balances} from "../../model/currency/balances";


@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private httpService:HttpService) { }

  getCurrencies():Observable<Balances>{

    return this.httpService.sendGetRequest("currency", "balances");
  }
}
