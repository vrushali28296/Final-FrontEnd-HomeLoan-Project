import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApnaloanListComponent } from './apnaloan-list/apnaloan-list.component';
import { ApnaloanDetailsComponent } from './apnaloan-details/apnaloan-details.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routing: Routes = [
  {path: 'apnalist',component:ApnaloanListComponent  },
  {
    path:'apnadetails',component:ApnaloanDetailsComponent
  }
 
  
];


@NgModule({
  declarations: [ApnaloanListComponent, ApnaloanDetailsComponent],
  imports: [
    CommonModule,RouterModule.forChild(routing),FormsModule
  ]
})
export class ApnaloanModule { }
