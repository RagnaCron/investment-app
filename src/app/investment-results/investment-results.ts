import {Injectable} from "@angular/core";

export interface InvestmentReturnData {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
  totalInterest: number;
  totalAmountInvested: number;
}

@Injectable({ providedIn: 'root'})
export class InvestmentResults {
  private initialInvestment = 0;
  private annualInvestment = 0;
  private expectedReturn = 0;
  private duration = 0;

  setInvestment(initialInvestment: number, annualInvestment: number, expectedReturn: number, duration: number) {
    this.initialInvestment = initialInvestment;
    this.annualInvestment = annualInvestment;
    this.expectedReturn = expectedReturn;
    this.duration = duration;
  }

  calculateInvestmentResults(): InvestmentReturnData[] {
    const annualData: InvestmentReturnData[] = [];
    let investmentValue = this.initialInvestment;

    for (let i = 0; i < this.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (this.expectedReturn / 100);
      investmentValue += interestEarnedInYear + this.annualInvestment;
      const totalInterest =
        investmentValue - this.annualInvestment * year - this.initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: this.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: this.initialInvestment + this.annualInvestment * year,
      });
    }

    return annualData;
  }
}


