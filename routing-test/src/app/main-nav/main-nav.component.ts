import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-nav',
  template: `
      <div>
        <a [routerLinkActive]="['activeLink']" routerLink="home">Home</a> | 
        <a [routerLinkActive]="['activeLink']" routerLink="about">About</a> | 
        <a [routerLinkActive]="['activeLink']" routerLink="contact">Contact Us</a> | 
        <a [routerLinkActive]="['activeLink']" routerLink="users">User List</a>
    </div>
    <hr>
  
  `,
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
