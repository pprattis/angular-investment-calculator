import {Component, computed, inject} from '@angular/core';
import {InvestmentService} from "../investment.service";

@Component({
  selector: 'app-investment-results',
  standalone: false,
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  private readonly investmentService = inject(InvestmentService);

  // get results() {
  //   return this.investmentService.resultsData;
  // }

  // results = this.investmentService.resultsData.asReadonly();

  results = computed(() => this.investmentService.resultsData());

}
