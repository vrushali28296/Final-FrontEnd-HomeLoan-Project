
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllApplicationListComponent } from './all-application-list/all-application-list.component';
import { AllApprovedListComponent } from './all-approved-list/all-approved-list.component';
import { FormsModule } from '@angular/forms';

import { ApplicationformComponent } from './applicationform/applicationform.component';
import { NewcaseformComponent } from './newcaseform/newcaseform.component';
import { RouterModule, Routes } from '@angular/router';

const serouting: Routes = [
  {path:'all-app-list',component:AllApplicationListComponent},
  {path:'all-approved-list',component:AllApprovedListComponent},
  {path:'new-loan-form',component:NewcaseformComponent},
  {path:'new-enquiry-form', component:ApplicationformComponent}
  
 
  
];



@NgModule({

  declarations: [AllApplicationListComponent, AllApprovedListComponent,  NewcaseformComponent, ApplicationformComponent],
  imports: [
    CommonModule,RouterModule.forChild(serouting), FormsModule
  ]

  
})
export class SalsesexecutiveModule { }
