import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApprovedListComponent } from './approved-list/approved-list.component';
import { EmiCalculatorComponent } from './emi-calculator/emi-calculator.component';
import { RouterModule, Routes } from '@angular/router';
import { LoanDetailsComponent } from './loan-details/loan-details.component';
import { FormsModule } from '@angular/forms';


const ahrouting: Routes = [
  {path: 'approvedlist',component:ApprovedListComponent  },
  {
    path:'emi/:customerid',component:EmiCalculatorComponent
  },
  {
    path:'loan',component:LoanDetailsComponent
  }
 
  
];


@NgModule({
  declarations: [ApprovedListComponent, EmiCalculatorComponent, LoanDetailsComponent],
  imports: [
    CommonModule,RouterModule.forChild(ahrouting),FormsModule
  ]
})
export class AccountheadModule { }
