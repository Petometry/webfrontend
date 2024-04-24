import {Component, input} from '@angular/core';
import {AsyncPipe} from "@angular/common";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-currency',
  standalone: true,
  imports: [
    AsyncPipe,
    MatIcon
  ],
  templateUrl: './currency.component.html',
  styleUrl: './currency.component.css'
})
export class CurrencyComponent {
  currency = input.required<number>();
  icon = input.required<string>();
}
