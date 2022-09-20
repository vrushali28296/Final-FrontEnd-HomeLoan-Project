import { Component, OnInit } from '@angular/core';
import { AccountDetails } from 'app/model/account-details';
import { Applicant } from 'app/model/applicant';
import { Customer } from 'app/model/Customer';
import { Documents } from 'app/model/documents';
import { LoanDetails } from 'app/model/loan-details';
import { ProfessionDetails } from 'app/model/profession-details';
import { PropertyDetails } from 'app/model/property-details';
import { CommonService } from 'app/module/shared/common.service';

@Component({
  selector: 'app-newcaseform',
  templateUrl: './newcaseform.component.html',
  styleUrls: ['./newcaseform.component.css']
})
export class NewcaseformComponent implements OnInit {

  selectaddressProof:any;
  imageSrc1:any;
  selectpancard:any;
  imageSrc2:any;
  selectaadharcard:any;
  imageSrc3:any;
  selectsignature:any;
  imageSrc4:any;
  selectphoto:any;
  imageSrc5:any;
  selectincometax:any;
  imageSrc6:any;
  selectsalaryslip:any;
  imageSrc7:any;
  selectbankcheck:any;
  imageSrc8:any;

  reader=new FileReader
  constructor(public cs:CommonService) { }

  state:number=1;

app : Applicant[]  ;

  ngOnInit(): void {
    this.app=this.cs.aplicant;
  }

  // editData(app:Applicant){
  // this.cs.c()=>data
  // }
 
  saveApplicantAsCustomer(c:any,app:any)
  {
     this.cs.saveApplicantAsCustomer(c,app).subscribe();
  }

  onnext(){
    this.state=this.state-1;
   }


   onselectaddressProof(event){
    alert("call");
    this.selectaddressProof= event.target.files[0];
    this.reader.onload = e => this.imageSrc1 = this.reader.result;
    this.reader.readAsDataURL(this.selectaddressProof);
}

onselectpancard(event){

  this.selectpancard=event.target.files[0];
  this.reader.onload = e => this.imageSrc2 = this.reader.result;
  this.reader.readAsDataURL(this.selectpancard);
}

  onselectaadharcard(event){
    alert("call");
    this.selectaadharcard= event.target.files[0];
    this.reader.onload = e => this.imageSrc3 = this.reader.result;
    this.reader.readAsDataURL(this.selectaadharcard);
}

onselectsignature(event){

  this.selectsignature=event.target.files[0];
  this.reader.onload = e => this.imageSrc4 = this.reader.result;
  this.reader.readAsDataURL(this.selectsignature);
}

onselectphoto(event){

  this.selectphoto=event.target.files[0];
  this.reader.onload = e => this.imageSrc5 = this.reader.result;
  this.reader.readAsDataURL(this.selectphoto);

}

onselectincometax(event){

  this.selectincometax=event.target.files[0];
  this.reader.onload = e => this.imageSrc6 = this.reader.result;
  this.reader.readAsDataURL(this.selectincometax);

}

onselectsalaryslip(event){

  this.selectsalaryslip=event.target.files[0];
  this.reader.onload = e => this.imageSrc7 = this.reader.result;
  this.reader.readAsDataURL(this.selectsalaryslip);

}

onselectbankcheck(event){

  this.selectbankcheck=event.target.files[0];
  this.reader.onload = e => this.imageSrc8 = this.reader.result;
  this.reader.readAsDataURL(this.selectbankcheck);

}


// saveDoc(c:Customer){
//   const doc=JSON.stringify(c);
   
 
//    const docupload=new FormData();
//    docupload.append("addressProof",this.selectaddressProof);
//    docupload.append("pancard",this.selectpancard);
//    docupload.append("aadharcard",this.selectaadharcard);
//    docupload.append("signature",this.selectsignature);
//    docupload.append("photo",this.selectphoto);
//    docupload.append("incometax",this.selectincometax);
//    docupload.append("salaryslip",this.selectsalaryslip);
//    docupload.append("bankcheck",this.selectbankcheck);
//    docupload.append("doc",doc);
 
//   // this.cs.saveCustomerData(docupload).subscribe()

//   // this.cs.savedocument(docupload).subscribe();
//    window.location.reload();
 
//  }
 cust:Customer
 saveCustomer(c:Customer){
  return this.cs.saveCustomerData(c).subscribe(data=>{
this.cust=data;
this.state=this.state+1;
  });
 }

 saveProfession(prof:ProfessionDetails)
 {
    alert("ts")
  this.cs.saveProfessionDetails(prof,this.cust.customerid).subscribe()
  this.state=this.state+1;
 }

 saveProperty(p:PropertyDetails){
   alert("in save p")
   this.state=this.state+1;
   return this.cs.savePropertyDetails(p,this.cust.customerid).subscribe();
  }

  saveAccount(ad:AccountDetails){
      alert("ad in cs")
      this.state=this.state+1;
    return this.cs.saveAccountDetails(ad,this.cust.customerid).subscribe();
  }

  saveLoandetails(ld:LoanDetails){
        alert("ld in cs")
        this.state=this.state+1;
    return this.cs.saveLoanDetails(ld,this.cust.customerid).subscribe();
  }


  saveDocuments(doc:Documents,id:number)
  {
    alert("inside")

    const document=JSON.stringify(doc);
 
    const docupload=new FormData();
    docupload.append("addressProof",this.selectaddressProof);
    docupload.append("pancard",this.selectpancard);
    docupload.append("aadharcard",this.selectaadharcard);
    docupload.append("signature",this.selectsignature);
    docupload.append("photo",this.selectphoto);
    docupload.append("incometax",this.selectincometax);
    docupload.append("salaryslip",this.selectsalaryslip);
    docupload.append("bankcheck",this.selectbankcheck);
   docupload.append("document",document);
   this.cs.savedocument(docupload,this.cust.customerid).subscribe()

  }


 }
