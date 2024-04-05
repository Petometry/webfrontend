import {Component, OnInit} from '@angular/core';
import {CurrencyService} from "../../service/currencyservice/currency.service";

@Component({
  selector: 'app-currencies',
  standalone: true,
  imports: [],
  templateUrl: './currencies.component.html',
  styleUrl: './currencies.component.css'
})
export class CurrenciesComponent implements OnInit{
  protected geoCoins: number;


  constructor(private currencyService:CurrencyService) {
    this.geoCoins = 0;
  }

  ngOnInit(): void {

    this.currencyService.getCurrencies().subscribe((currencies => this.geoCoins = currencies.geocoin))
  }
}
