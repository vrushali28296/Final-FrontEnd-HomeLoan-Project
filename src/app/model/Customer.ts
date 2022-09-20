
import { AccountDetails } from "./account-details";
import { Applicant } from "./applicant";
import { Documents } from "./documents";
import { LoanDetails } from "./loan-details";
import { ProfessionDetails } from "./profession-details";
import { PropertyDetails } from "./property-details";

export class Customer {
  customerid: number;
  customerage: String;
  customername: String;
  customergender: String;
  customeremail: String;
  customerdob: String;
  customeraddress: String;
  customermobno: String;
  applicant:Applicant;
  accountDetails:AccountDetails;
  propertyDetails:PropertyDetails;
  documents:Documents;
  profession:ProfessionDetails;
  loanDetails:LoanDetails;

}

