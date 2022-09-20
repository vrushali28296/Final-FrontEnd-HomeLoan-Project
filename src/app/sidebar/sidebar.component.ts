import { Component, OnInit } from '@angular/core';
import { Menu } from 'app/model/menu';
import { CommonService } from 'app/module/shared/common.service';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',     title: 'Dashboard',         icon:'nc-bank',       class: '' },
    { path: '/icons',         title: 'Icons',             icon:'nc-diamond',    class: '' },
    { path: '/maps',          title: 'Maps',              icon:'nc-pin-3',      class: '' },
    { path: '/notifications', title: 'Notifications',     icon:'nc-bell-55',    class: '' },
    { path: '/user',          title: 'User Profile',      icon:'nc-single-02',  class: '' },
    { path: '/table',         title: 'Table List',        icon:'nc-tile-56',    class: '' },
    { path: '/typography',    title: 'Typography',        icon:'nc-caps-small', class: '' },
    { path: '/upgrade',       title: 'Upgrade to PRO',    icon:'nc-spaceship',  class: 'active-pro' }
    
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    role: string;
    
    constructor(public cs : CommonService) {}
  
    ngOnInit() {
       this.menuItems = ROUTES.filter(menuItem => menuItem);
      this.menuItems = Menu.menu;
      console.log(this.menuItems);
      this.role = sessionStorage.getItem("role");
      console.log(this.role);
      this.image=this.cs.img
    }

    image:string="/assets/img/pass_size.jpg"

    count:number=0;

}
