import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'app/model/Customer';
import { Menu } from 'app/model/menu';
import { CommonService } from 'app/module/shared/common.service';
import { ROUTES } from 'app/sidebar/sidebar.component';
import { data } from 'jquery';

@Component({
  selector: 'app-approved-application',
  templateUrl: './approved-application.component.html',
  styleUrls: ['./approved-application.component.css']
})
export class ApprovedApplicationComponent implements OnInit {
 Customer:any;
  constructor(public cs:CommonService,public r:Router) { }

 customer:Customer;


  ngOnInit(): void {

    this.cs.getCustomerList().subscribe(data=>{
      this.Customer=data
    })
  
  }

  ShowDocuments(a:number){
alert("in show Documents");
alert(a)
    this.cs.c.customerid=a
    // this.cs.getCustomerById(a).subscribe()
    this.r.navigateByUrl('role/dvofficer/upload-document');
  }

}
