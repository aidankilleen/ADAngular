import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <a [routerLinkActive]="['activeLink']" routerLink="home">Home</a> | 
      <a [routerLinkActive]="['activeLink']" routerLink="about">About</a> | 
      <a [routerLinkActive]="['activeLink']" routerLink="contact">Contact Us</a> | 
      <a [routerLinkActive]="['activeLink']" routerLink="users">User List</a>
    </div>
    <hr>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-test';
}
