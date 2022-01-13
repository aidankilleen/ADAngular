import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users-page',
  template: `
    <h1>User List</h1>

    <ul>
      <li *ngFor="let user of users">
        <a routerLink="{{ user.id }}">{{user.name}}</a>
      </li>
    </ul>
  `,
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {

  users: User[];

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe(users=>this.users=users);
  }

}
