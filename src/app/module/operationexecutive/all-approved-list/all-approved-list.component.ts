import { Component, OnInit } from '@angular/core';

import { Applicant } from 'app/model/applicant';
import { CommonService } from 'app/module/shared/common.service';


@Component({
  selector: 'app-all-approved-list',
  templateUrl: './all-approved-list.component.html',
  styleUrls: ['./all-approved-list.component.css']
})
//
 export class AllApprovedListComponent implements OnInit {

 applicantid:number;
   fc:any;
  
 constructor(public cs:CommonService) { }

  // app:Applicant={
  //   applicantid:0,
  //   applicant_name:"",
  //   applicant_occupation:"",
  //   applicant_pancard:"",
  //   applicant_email:"",
  //   cibil:{
  //     cibilId:0,
  //     cibilScore:0,
  //     cibilScoreDateTime:"",
  //     cibilStatus:"",
  //     cibilRemark:"",
  //       }}

  retriveApp:any;
ngOnInit(): void {
 this.cs.getApplicantData().subscribe(data=>{
     this.retriveApp=data
   })
 }

 checkcibil(){
    
    this.cs.getCibil().subscribe(data=>{
      this.fc=data
      console.log(data); 
    })
  }

  approved(fc:number,applicantid:number,pr:any){
    alert(fc);
    alert(applicantid);
    console.log("id "+ applicantid)
  //  this.cs.app.cibil.cibil_Score=fc;
    this.cs.saveCibil(fc,applicantid,pr).subscribe()
  }

  // approved(fc,a){
  //   alert(fc);
  //   alert(a);
  //   console.log("id "+ a.applicantid)

  //   this.cs.saveCibil(fc,a)
  // }
}
 
 
 