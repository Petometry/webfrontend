import {Injectable} from '@angular/core';
import {HttpService} from "../httpservice/http.service";
import {Observable} from "rxjs";
import {BalancesModel} from "../../model/currency/balances.model";


@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private httpService:HttpService) { }

  getCurrencies():Observable<BalancesModel>{

    return this.httpService.sendGetRequest("currency", "balances");
  }
}
