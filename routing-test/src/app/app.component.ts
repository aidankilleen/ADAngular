import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <main-nav-bs></main-nav-bs>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-test';
}
