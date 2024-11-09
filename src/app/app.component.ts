import {Component, inject, Input} from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {UserInputComponent} from "./user-input/user-input.component";
import {InvestmentResultsComponent} from "./investment-results/investment-results.component";
import {InvestmentResults, InvestmentReturnData} from "./investment-results/investment-results";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    UserInputComponent,
    InvestmentResultsComponent
  ]
})
export class AppComponent {

  private investmentCalculator = inject(InvestmentResults);
  private data: InvestmentReturnData[] = [];

  onCalculate() {
    this.data = this.investmentCalculator.calculateInvestmentResults();
  }

  getData() {
    return this.data;
  }
}
