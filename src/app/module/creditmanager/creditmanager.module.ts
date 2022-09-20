import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { ApprovedListComponent } from './approved-list/approved-list.component';

const routing: Routes = [
  {path: "credit", component:ApprovedListComponent },
  
];

@NgModule({
  declarations: [ ApprovedListComponent],
  imports: [
    CommonModule,RouterModule.forChild(routing)
  ]
})
export class CreditmanagerModule { }
