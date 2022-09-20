
import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { OperationexecutiveModule } from './module/operationexecutive/operationexecutive.module';
import { CreditmanagerModule } from './module/creditmanager/creditmanager.module';

import { ApnaloanModule } from './module/apnaloan/apnaloan.module';
import { AccountheadModule } from './module/accounthead/accounthead.module';
import { DocumentVerificationOfficerModule } from './module/document-verification-officer/document-verification-officer.module';
import { SalsesexecutiveModule } from './module/salsesexecutive/salsesexecutive.module';
import { LedgerModule } from './module/ledger/ledger.module';
import { EmployeeModule } from './module/employee/employee.module';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoandetailsComponent } from './loandetails/loandetails.component';


export const AppRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, 
  {
    path:"log",component:LoginComponent
  }
,
  {
    path: 'role',
    component: AdminLayoutComponent,
    children: [
      {path: 'accounthead', loadChildren: () =>AccountheadModule },
      {path: 'dvofficer', loadChildren: () => DocumentVerificationOfficerModule},
      {path:'operation',loadChildren:()=>OperationexecutiveModule},
      {path:'cr',loadChildren:()=>CreditmanagerModule},
      {path:'selsexcutive',loadChildren:()=>SalsesexecutiveModule},
      {path:'ledger',loadChildren:()=>LedgerModule},
      {path:'apnaloan',loadChildren:()=>ApnaloanModule},
      {path:'employee',loadChildren:()=>EmployeeModule}

 

    ]
  },
 
  {
    path:'loanDetails' , component : LoandetailsComponent
  },
  {
    path:'contactus' , component :ContactusComponent
  },
  {
    path:'aboutus' , component :AboutusComponent
  },

  {
    path: '**',
    redirectTo: 'dashboard'
  }
];



