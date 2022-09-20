import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { Applicant } from 'app/model/applicant';
import { CommonService } from 'app/module/shared/common.service';

@Component({
  selector: 'app-all-approved-list',
  templateUrl: './all-approved-list.component.html',
  styleUrls: ['./all-approved-list.component.css']
})
export class AllApprovedListComponent implements OnInit {
applicant:Applicant[];

  constructor(public cs:CommonService , public r:Router) { }

  ngOnInit(): void {

    this.cs.getapprovedlist().subscribe(data=>{
      this.applicant=data
    })
    this.cs.aplicant=this.applicant
  }



  retriveApp:any;

  savecustomer(a:number)
  {
    
     this.cs.app.applicantid=a
   // this.cs.app=Object.assign({},a);
    this.r.navigateByUrl('role/selsexcutive/new-loan-form');
    
  }

  sendemail(e:string,a){
alert(e)
    this.cs.sendEmail(e,a).subscribe();

  }
  
  
}
