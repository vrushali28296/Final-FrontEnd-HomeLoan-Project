import { Component, OnInit } from '@angular/core';
import { CommonService } from 'app/module/shared/common.service';
import { employee } from '../add-employee/add-employee.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(public cs:CommonService,) { }
  emplist:employee[];
  ngOnInit(): void {
    this.cs.getEmpDAta().subscribe(data=>{
      this.emplist=data;
    })
  }
   deleteData(id:number){
      this.cs.DeleteEmpData(id).subscribe();
       //window.location.reload();
   } 
  
   editData(e:employee){
    this.cs.e=Object.assign({},e)
   }


  }


