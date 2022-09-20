import { Applicant } from 'app/model/applicant';
import { CommonService } from 'app/module/shared/common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applicationform',
  templateUrl: './applicationform.component.html',
  styleUrls: ['./applicationform.component.css']
})
export class ApplicationformComponent implements OnInit {

  constructor(public cs:CommonService) { }

  ngOnInit(): void {
  }

  saveApplicant(app:Applicant)
  {
    this.cs.saveApplicant(app).subscribe();
    window.location.reload();
  }

  resetData()
  {
    this.cs.app=Object.assign({},null);
    window.location.reload();
  }

}
