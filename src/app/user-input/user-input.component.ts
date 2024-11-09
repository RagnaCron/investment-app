import {Component, inject, output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {InvestmentResults} from "../investment-results/investment-results";

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExpectedReturn = '5';
  enteredDuration = '10';

  calculate = output<void>()

  private investmentCalculator = inject(InvestmentResults);

  onSubmit() {
    this.investmentCalculator.setInvestment(
      Number(this.enteredInitialInvestment),
      Number(this.enteredAnnualInvestment),
      Number(this.enteredExpectedReturn),
      Number(this.enteredDuration))
    this.calculate.emit()
  }
}
