import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Customer } from 'app/model/Customer';
import { CommonService } from 'app/module/shared/common.service';



@Component({
  selector: 'app-upload-document',
  templateUrl: './upload-document.component.html',
  styleUrls: ['./upload-document.component.css']
})
export class UploadDocumentComponent implements OnInit {
  state:number=1;

customer:Customer[];

  constructor(public fb:FormBuilder,public cs:CommonService,public location:Location) { }
  
  a:number;  

  ngOnInit(): void {

    alert("in upload main");
  // console.log(this.cs.c.customerid);
  // this.cust=this.cs.customer;
  // alert("new alert "+this.cust.documents.documentId)
     this.cs.getCustomerById().subscribe(data=>{
       this.customer=data
       
     })


    }

  
onnext(){
 this.state=2
}
approve:string="approve"
reject:string="reject"
approved(p:any)
{
this.cs.setDocumentStatus(this.approve,p).subscribe();
}

rejected(pr:any)
{
  this.cs.setDocumentStatus(this.reject,pr).subscribe();
}


// rejected(){}

// getDocumentsData(){

    

// }



  


}
