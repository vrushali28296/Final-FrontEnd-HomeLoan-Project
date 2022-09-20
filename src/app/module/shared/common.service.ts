import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { employee } from '../employee/add-employee/add-employee.component';
import { Observable } from 'rxjs';

import { Cibil } from 'app/model/cibil';
import { Customer } from 'app/model/Customer';
import { Applicant } from 'app/model/applicant';
import { PropertyDetails } from 'app/model/property-details';
import { AccountDetails } from 'app/model/account-details';
import { ProfessionDetails } from 'app/model/profession-details';
import { LoanDetails } from 'app/model/loan-details';
import { Documents } from 'app/model/documents';
import { idText } from 'typescript';

@Injectable({
  providedIn: 'root'
})


export class CommonService {


  url:string="http://localhost:7777/savedocuments/"

  postEmpurl:string="http://localhost:7777/Employee/"

  getEmpurl:string="http://localhost:7777/Employees/"

  DeleteEmpurl:string="http://localhost:7777/Employee/"

  UpdateEmpurl:string="http://localhost:7777/Employee/"

  getApplicanturl:string="http://localhost:7777/getApplicants/"

  getCibilurl:string="http://localhost:7777/getCibil/"

  saveCibilurl:string="http://localhost:7777/saveCibil/"

  saveprofessionDetailsurl:string="http://localhost:7777/saveProfessiondetails/" 

  suapplicanturl:string="http://localhost:7777/saveApplicant/"

  saveCustomerurl:string="http://localhost:7777/saveCustomer/"

  savePropertyDetailsurl:string="http://localhost:7777/savepropertydetails/"

  saveAccountDetailsurl:string="http://localhost:7777/saveAccount/"

  saveLoanDetailsurl:string="http://localhost:7777/saveloanDetails/"

  getApprovedlisturl:string="http://localhost:7777/getApprovedList/"

  getDocumentslisturl:string="http://localhost:7777/documents/"

  getCustomerDataurl:string="http://localhost:7777/getCustomers/"

  setDocStatusurl:string="http://localhost:7777/updatestatus/"

  sendEmailurl="http://localhost:7777/sendMail/"

  emplist:employee[];
  constructor(public http:HttpClient) { }
  

  e: employee = {
    employeeid: 0,
    employeename: "",
    employeeusername: "",
    employeepassword: "",
    employeedesignation: "",
    employeemobile: "",
    employeeemailid: "",
    
  };

//   c:Customer={
//     customerid:0,
//     customer_age: "",
//     customer_name: "",
//     customer_gender: "",
//     customer_email: "",
//     customer_dob: "",
// customer_address:"",
//     customer_mobno: "",
// applicant:{
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
    
//       }
//     },
// accountDetails:{
//   accountId:0,
    // accounntNo
//   account_type:"",
//   account_holdername:"",
//   ifsc_code:"",
//     },
// propertyDetails:{

//   propertyID:0,
//   property_type:"",
//   property_area:"",
//   property_price:"",
//   property_address:"",
// },
// documents:{
//   documentId:0,
//   address_Proof:[],  
//   pancard: [],
//   aadharcard: [],
//   signature: [],
//   photo: [],
//   incometax: [],
//   salaryslip: [],
//   bankcheck: []
//  },
// profession:{
//   proffessionid:0,
//   designation:"",
//   proffession_name:"",
//   proffession_type:"",
//   annual_salary:"",
// },
// loanDetails:{
//   loanId:0,
//   loanPrincipalAmt:"",
//   rateOfInterest:"",
//   loanTenure:"",
//   status:"",
//   emiDetails:{
//     emiId:0,
//     emiAmtMonnthly:"",
//     emiDueDate:"",
//     previousEmiStatus:"",
//     }
//   } 
//   }

  app:Applicant={
    applicantid:0,
    applicantname:"",
    applicantoccupation:"",
    applicantpancard:"",
    applicantemail:"",
    cibil:{
      cibilId:0,
      cibilScore:0,
      cibilScoreDateTime:"",
      cibilStatus:"",
      cibilRemark:"",
        }}
        
        c:Customer={
          customerid: 0,
          customerage: "",
          customername: "",
          customergender: "",
          customeremail: "",
          customerdob: "",
          customeraddress: "",
          customermobno: "",
          applicant: new Applicant,
          accountDetails: new AccountDetails,
          propertyDetails: new PropertyDetails,
          documents: new Documents,
          profession: new ProfessionDetails,
          loanDetails: new LoanDetails
        };

        ad:AccountDetails={
             accountId:0,
             accounntNo:"",
             accounttype:"",
             accountholdername:"",
             ifsccode:"",
               }


         p:PropertyDetails={

          propertyID:0,
          propertytype:"",
          propertyarea:"",
          propertyprice:"",
          propertyaddress:"",
        }
        
        doc:Documents={
            documentId:0,
            status:"",
            addressProof:[],  
            pancard: [],
            aadharcard: [],
            signature: [],
            photo: [],
            incometax: [],
            salaryslip: [],
            bankcheck: []
           };

           prof:ProfessionDetails={
              proffessionid:0,
              designation:"",
              proffessionname:"",
              proffessiontype:"",
              annualsalary:"",
            }

            ld:LoanDetails={
                loanId:0,
                loanPrincipalAmt:0,
                rateOfInterest:0,
                loanTenure:0,
                status:"",
                emiDetails:{
                  emiId:0,
                  emiAmtMonnthly:0,
                  emiDueDate:"",
                  previousEmiStatus:"",
                  }}
              


aplicant:Applicant[];

customer:Customer;

img:string="/assets/img/raju.jpg";
setimage(image :string)
{
this.img=image;
}

saveApplicantAsCustomer(app:Applicant,c:Customer)
{
  this.c.customername=this.app.applicantname;
  this.c.customeremail=this.app.applicantemail;
   return this.http.post(this.saveCustomerurl+app,c);
}






getEmpDAta():Observable<employee[]>{
  return this.http.get<employee[]>(this.getEmpurl)
}

DeleteEmpData(id:number){
  return this.http.delete(this.DeleteEmpurl+id)
}

updateEmpData(e:employee){

  return this.http.put(this.UpdateEmpurl+e.employeeid,e)
}


getApplicantData():Observable<Applicant>{

  return this.http.get<Applicant>(this.getApplicanturl)
}

getCibil():Observable<Cibil>{
  console.log("service");
  return this.http.get<Cibil>(this.getCibilurl);
}

saveEmpData(e){
  alert(e)
  return this.http.post(this.postEmpurl,e)
}

saveCustomerData(c:Customer):Observable<Customer>
{
  console.log("in commonservice");
 return this.http.post<Customer>(this.saveCustomerurl+this.app.applicantid,c);
}

saveApplicant(a:Applicant)
{
return this.http.post(this.suapplicanturl,a)
}


loanurl:string="http:localhost:7777/newsaveloanDetails/";
saveloan(ID:any ,id:number){
  return this.http.post(this.loanurl+id,ID)
}

saveCibil(s:number,a:number,p){
  console.log(a,s)
   //return this.http.post(this.saveCibilurl+this.app.cibil.cibil_Score+"/"+a.applicantid,a);
   return this.http.post(this.saveCibilurl+s+"/"+a,p);
  }

  savePropertyDetails(p:PropertyDetails, id:number){
    alert("save p")
    return this.http.post(this.savePropertyDetailsurl+id,p);
  }

  saveProfessionDetails(prof:ProfessionDetails,id:number){
alert(id)
    alert("cs")
alert(prof.annualsalary)
    return this.http.post(this.saveprofessionDetailsurl+id,prof);

  }

  saveAccountDetails(ad:AccountDetails,id:number){

      return this.http.post(this.saveAccountDetailsurl+id,ad)

  }

 

  savedocument(doc,id:number){
    return this.http.post(this.url+id,doc)
  }

  getapprovedlist():Observable<Applicant[]>{
    return this.http.get<Applicant[]>(this.getApprovedlisturl)
  }

  // getDocumentslist():Observable<Documents[]>{
  //   return this.http.get<Documents[]>(this.getDocumentslisturl)
  // }

  getCustomerList():Observable<Customer[]>{
    return this.http.get<Customer[]>(this.getCustomerDataurl)
  }


  getCustomerById():Observable<Customer[]>
  {
    return this.http.get<Customer[]>(this.getCustomerDataurl+this.c.customerid)
  }

  setDocumentStatus(s:string,p:any)
  {

     return this.http.post(this.setDocStatusurl+s+"/"+this.c.customerid,p)
  }
  loanDetails= {
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
  getcust:string="http://localhost:7777/getCustomer/"
  
   
    loanurl1:string="http://localhost:7777/saveloanDetails/"
  
    saveLoanDetails(loanD:LoanDetails):Observable<LoanDetails>
    {
      alert("cust id "+this.c.customerid);
      alert("amt  " + loanD.loanPrincipalAmt)
  
      return this.http.post<LoanDetails>(this.loanurl1+this.c.customerid,loanD);
    }
    loanurl11:string="http://localhost:7777/newsaveloanDetails/"
  
    saveLoan(ld:any,id:number)
    {
      // alert(cust.loanAmount)
      // alert(this.c.customerid)
      return this.http.post(this.loanurl11+id,ld)
    }
  
    calemiurl:string="http://localhost:7777/getCalEmi"
  
  calemi(loan:LoanDetails)
  {
       alert("amt" + loan.loanPrincipalAmt)
      return this.http.post(this.calemiurl,loan);
  }

  getCustById(id:number){
    return this.http.get(this.getcust+id)
  }

  getcusturl:string="http://localhost:7777/getCustomers/"

  getCustomerdata()
  {
    return this.http.get<Customer[]>(this.getcusturl);
  }


  sendEmail(s:string,a:any){
  alert(s)
  return this.http.post(this.sendEmailurl+"/"+s,a)
  }

  sendsanctionletterurl:string="http://localhost:7777/sendSanctionMail/"
  sendSanctionMail(c:any,a:any)
  {
    alert(c.customerid)
    return this.http.post(this.sendsanctionletterurl+c.customeremail,a)
  }

  sendRejectedEmailurl:string="";
  sendRejectedEmail(c:any,a)
  {
    alert(c.customerid)
    return this.http.post(this.sendRejectedEmailurl+c.customeremail,a) 
  }

  getallApplicants11:string="http://localhost:7777/getApplicants"
  getallApplicants():Observable<Applicant[]>
  {
   return this.http.get<Applicant[]>(this.getallApplicants11)
  }

  // sendsanctionletterurl:string="http://localhost:7777/sendsanctionletter"
  // sendSanctionLetter(s:string)
  // {
  //   return this.http.post(this.sendsanctionletterurl+s)
  // }

}