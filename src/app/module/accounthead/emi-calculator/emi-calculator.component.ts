import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'app/model/Customer';
import { LoanDetails } from 'app/model/loan-details';
import { CommonService } from 'app/module/shared/common.service';

@Component({
  selector: 'app-emi-calculator',
  templateUrl: './emi-calculator.component.html',
  styleUrls: ['./emi-calculator.component.css']
})
export class EmiCalculatorComponent implements OnInit {

  

  
  c:Customer={
    customerid: 0,
    customerage: "",
    customername: "",
    customergender: "",
    customeremail: "",
    customerdob: "",
    customeraddress: "",
    customermobno: "",
    applicant: {
      applicantid: 0,
      applicantname: "",
      applicantoccupation: "",
      applicantpancard: "",
      applicantemail: "",
      cibil: {
        cibilId: 0,
        cibilScore: 0,
        cibilScoreDateTime: "",
        cibilStatus: "",
        cibilRemark: "",
      }
    },
    accountDetails: {
      accountId: 0,
      accounntNo:"",
      accounttype: "",
      accountholdername: "",
      ifsccode: "",
    },
    propertyDetails: {
      propertyID: 0,
      propertytype: "",
      propertyarea: "",
      propertyprice: "",
      propertyaddress: "",
    },

    documents : {
      documentId: 0,
      addressProof: [],
      pancard: [],
      aadharcard: [],
      signature: [],
      photo: [],
      incometax: [],
      salaryslip: [],
      bankcheck: [],
      status:""
    },
    profession: {
      proffessionid: 0,
      designation: "",
      proffessionname: "",
      proffessiontype: "",
      annualsalary: "",
    },
    loanDetails:{
      loanId: 0,
      loanPrincipalAmt: 0,
      rateOfInterest: 0,
      loanTenure: 0,
      status: "",
      emiDetails: {
        emiId: 0,
        emiAmtMonnthly: 0,
        emiDueDate: "",
        previousEmiStatus: "",
      }

    }
  }


  lonedetails:LoanDetails={
    loanId: 0,
    loanPrincipalAmt: 0,
    rateOfInterest: 0,
    loanTenure: 0,
    status: '',
    emiDetails: {
      emiId: 0,
      emiAmtMonnthly: 0,
      emiDueDate: "",
      previousEmiStatus: "",
    }
  };
  id:any;
  constructor(public cs:CommonService, private ar:ActivatedRoute,private routes:Router) { }
 
  ngOnInit(): void {
    
    this.ar.paramMap.subscribe(params => {
      alert("param : "+params.get('customerid'))
      this.id=params.get('customerid');
      this.cs.getCustById(this.id).subscribe((data:Customer)=>{
        this.c=data;
        console.log(this.c);

        this.lonedetails=this.c.loanDetails;
        
        
      })
    })
  }


//  loanDetails:any= {
//     loanId: 0,
//     loanPrincipalAmt: "",
//     rateOfInterest: "",
//     loanTenure: "",
//     status: "",
//     emiDetails: {
//       emiId: 0,
//       emiAmtMonnthly: "",
//       emiDueDate: "",
//       previousEmiStatus: "",
//     }
//   }

 

  calculation(em:any)
  {

     this.cs.saveLoanDetails(em).subscribe(data=>{
      this.lonedetails=data
      alert(data)
      console.log(this.lonedetails);
      
      alert("inside"+this.lonedetails.loanId)
     })
    
     this.cs.loanDetails.emiDetails.emiAmtMonnthly=this.lonedetails.emiDetails.emiAmtMonnthly
     
      alert("checking "+em.emiAmtMonnthly);

      
  }

  custId:number;
  loanAmount: number;
  tenure: number;
  interest: number;
  emi: number;
  cal(id:number) {
    var outstandingAmount =
      Number(this.loanAmount) +
      Number(this.loanAmount * (this.interest / 100/12) * this.tenure);
    this.emi = outstandingAmount / this.tenure;
    this.lonedetails.loanPrincipalAmt=this.loanAmount;
    this.lonedetails.loanTenure=this.tenure;
    this.lonedetails.rateOfInterest=this.interest;
    this.lonedetails.emiDetails.emiAmtMonnthly=this.emi;
    alert(this.lonedetails.loanPrincipalAmt)
    this.cs.saveLoan(this.lonedetails,id).subscribe();
  //  this.routes.navigate(['role','accounthead','approvedlist',this.lonedetails.emiDetails.emiAmtMonnthly]);
  }

}
