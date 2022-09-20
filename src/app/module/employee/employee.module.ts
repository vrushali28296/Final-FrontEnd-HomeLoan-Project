import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const emprouting: Routes = [
  {path:'add-emp',component:AddEmployeeComponent},
  {path:'emp-list',component:EmployeeListComponent}   
];


@NgModule({
  declarations: [AddEmployeeComponent, EmployeeListComponent],
  imports: [
    CommonModule,RouterModule.forChild(emprouting),ReactiveFormsModule,FormsModule,HttpClientModule
  ]
})
export class EmployeeModule { }
