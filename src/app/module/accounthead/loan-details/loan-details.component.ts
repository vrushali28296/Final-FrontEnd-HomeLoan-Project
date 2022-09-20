import { Component, OnInit } from '@angular/core';
import { CommonService } from 'app/module/shared/common.service';

@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.css']
})
export class LoanDetailsComponent implements OnInit {

  constructor(public cs:CommonService) { }

  ngOnInit(): void {
  }

  saveLoanDetail(){


   // return this.cs.saveLoanDetails(ld,this.).subscribe();
  }


}
