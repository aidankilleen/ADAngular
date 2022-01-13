import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-nav-bs',
  template: `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" routerLink="/home">User Management App</a>
  <button 
    class="navbar-toggler" type="button" 
    data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
    (click)="isMenuCollapsed = !isMenuCollapsed"
    >
    <span class="navbar-toggler-icon"></span>
  </button>
  <div [ngbCollapse]="isMenuCollapsed" class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item" [routerLinkActive]="['active']">
      <a class="nav-link" routerLink="home" (click)="isMenuCollapsed=true">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item" [routerLinkActive]="['active']">
        <a class="nav-link" routerLink="about" (click)="isMenuCollapsed=true">About</a>
      </li>
      <li class="nav-item" [routerLinkActive]="['active']">
        <a class="nav-link" routerLink="contact" (click)="isMenuCollapsed=true">Contact</a>
      </li>
      <li class="nav-item" [routerLinkActive]="['active']">
        <a class="nav-link" routerLink="users" (click)="isMenuCollapsed=true">User List</a>
      </li>
    </ul>
  </div>
</nav>  

  
  
  
  
  `,
  styleUrls: ['./main-nav-bs.component.css']
})
export class MainNavBsComponent implements OnInit {

  isMenuCollapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

}
