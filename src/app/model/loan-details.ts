import { EmiDetails } from "./emi-details";

export class LoanDetails {
    loanId:number;
    loanPrincipalAmt:number;
    rateOfInterest:number;
    loanTenure:number;
    status:string;
    emiDetails:EmiDetails;
}