import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup,  } from '@angular/forms';

import { CommonService } from 'app/module/shared/common.service';
export interface employee {
  employeeid:number;
  employeename:string;
  employeeusername:string;
  employeepassword:string;
  employeedesignation:string;
  employeemobile:string;
  employeeemailid:string;
}


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  e:employee={
    employeeid:0,
    employeename:"",
    employeeusername:"",
    employeepassword:"",
    employeedesignation:"",
    employeemobile:"",
    employeeemailid:"",
    
  };

  empform:FormGroup;

  constructor(public cs:CommonService,public fb:FormBuilder) { }

    
  ngOnInit(): void {
    this.EmloyeeData();
  }

  EmloyeeData(){
    this.empform=this.fb.group({
      employeeid: [],
  employeename: [""],
  employeeusername: [""],
  employeepassword: [""],
  employeedesignation: [""],
  employeemobile: [""],
  employeeemailid: [""],
    });
  }


  saveEmployee(){
console.log(this.empform.value);

    //  if(this.empform.get('employeeid').value>0)
    if(this.e.employeeid>0){
       this.cs.updateEmpData(this.empform.value).subscribe();
      }
      else{
      this.cs.saveEmpData(this.empform.value).subscribe()
      //window.location.reload();
     }
  }

  // resetData(){
  //   this.cs.e=Object.assign({},null)
  // }
}
