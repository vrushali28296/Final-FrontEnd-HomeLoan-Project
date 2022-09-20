import { Component, OnInit } from '@angular/core';
import { Customer } from 'app/model/Customer';
import { CommonService } from 'app/module/shared/common.service';
import { isTypeAliasDeclaration } from 'typescript';


@Component({
  selector: 'app-apnaloan-details',
  templateUrl: './apnaloan-details.component.html',
  styleUrls: ['./apnaloan-details.component.css']
})
export class ApnaloanDetailsComponent implements OnInit {

  custData:Customer;
  constructor(public cs:CommonService) { }



  ngOnInit():void {
  }

  submitData(c:Customer){
    console.log("in submit ts"+c)
    this.cs.saveCustomerData(c).subscribe();
  }
}
