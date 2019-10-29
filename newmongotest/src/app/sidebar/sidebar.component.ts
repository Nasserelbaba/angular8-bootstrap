import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  openNav() {
    document.getElementById("mySidenav").style.width = "18%";
    document.getElementById("body").style.paddingLeft = "9%";
  }
   closeNav() {
    document.getElementById("mySidenav").style.width = "0%";
    document.getElementById("body").style.paddingLeft = "0%";
  }

}
