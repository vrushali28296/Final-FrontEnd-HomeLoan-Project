import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'app/module/shared/common.service';
  export interface user {
    username: string;
    password: string;
    repassword: string;
    email: string;
  }
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  u: user = {
    username: "",
    password: "",
    repassword: "",
    email: ""
  };

  image:string="/assets/img/mike.jpg"
  imagecm:string="/assets/img/agri1.jpg"

  image1:string="/assets/img/raju.jpg"


  

  constructor(private router: Router, public cs : CommonService) {}
  username: string='';
  password:string='';
  ngOnInit() {}
  login(u) {
    console.log("login called");
    console.log(u.username,u.password);
    
   
    if (u.username === 'ad' && u.password === 'ad') {
      console.log('in admin');
      sessionStorage.setItem('role', 'apnaloan');
      this.router.navigateByUrl("role/apnaloan/apnalist");
    }
    if (u.username === 'dvo' && u.password === 'dvo') {
      console.log('in oe');
      // this.cs.setimage(this.image)
      sessionStorage.setItem('role', 'dvofficer');
      this.router.navigateByUrl("role/dvofficer/approved-app");
    }
    if (u.username === 'oe' && u.password === 'oe') {
     
      sessionStorage.setItem('role', 'operation');
      this.router.navigateByUrl("role/operation/allaplist");
    }
    if (u.username === 'cm' && u.password === 'cm') {
      console.log(u.username,u.password);
      // this.cs.setimage(this.imagecm)
      sessionStorage.setItem('role', 'cr');
      this.router.navigateByUrl("role/cr/credit");
    }

    
    if (u.username === 'se' && u.password === 'se') {
      console.log(u.username,u.password);

      sessionStorage.setItem('role','selsexcutive');
      this.router.navigateByUrl("role/selsexcutive/all-app-list");
    }
    if (u.username === 'ah' && u.password === 'ah') {
      console.log(u.username,u.password);
      sessionStorage.setItem('role', 'accounthead');
      this.router.navigateByUrl("role/accounthead/approvedlist");
    }
    if (u.username === 'emp' && u.password === 'emp') {
      console.log(u.username,u.password);
      sessionStorage.setItem('role', 'employee');
      this.router.navigateByUrl("role/employee/add-emp");
    }
    
  }
  // signup(u) {
  //   console.log("signup");
  // }
}
