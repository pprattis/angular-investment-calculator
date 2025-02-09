import {Component, input} from '@angular/core';
import {InvestmentOutputModel} from "../investment-output.model";
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-investment-results',
  imports: [
    CurrencyPipe
  ],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  results = input<InvestmentOutputModel[]>();
}
