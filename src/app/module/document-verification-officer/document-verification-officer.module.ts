import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApprovedApplicationComponent } from './approved-application/approved-application.component';
import { RouterModule, Routes } from '@angular/router';
import { UploadDocumentComponent } from './upload-document/upload-document.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const dvrouting: Routes = [
  {path: 'approved-app',component:ApprovedApplicationComponent},
  {path:'upload-document',component:UploadDocumentComponent}   
];


@NgModule({
  declarations: [ApprovedApplicationComponent, UploadDocumentComponent],
  imports: [
    CommonModule,RouterModule.forChild(dvrouting),ReactiveFormsModule,FormsModule,HttpClientModule
  ]
})
export class DocumentVerificationOfficerModule {


  
 }
