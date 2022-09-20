import { Component, OnInit } from '@angular/core';
import { CommonService } from 'app/module/shared/common.service';

@Component({
  selector: 'app-all-application-list',
  templateUrl: './all-application-list.component.html',
  styleUrls: ['./all-application-list.component.css']
})
export class AllApplicationListComponent implements OnInit {
  retriveDoc: any;
  retriveApp:any;
    constructor(public cs:CommonService) { }
  
    ngOnInit(): void {
  
      this.cs.getallApplicants().subscribe(d=>{
        this.retriveApp=d;
       })
  
    }
  

}
