import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users-page',
  template: `
    <h1>User List</h1>

    <ul>
      <li *ngFor="let user of users">
        <a routerLink="{{ user.id }}">{{user.name}}</a> | 
        <button (click)="onDelete(user)" class="btn btn-danger">x</button>
      </li>
    </ul>

    <div style="position: absolute; top: 50; right: 0;">
      <ngb-toast class="bg-danger"
        header="Delete User" 
        *ngIf="showToast"
        [autohide]="false"
        [delay]="5000">
        The user was deleted
      </ngb-toast>
    </div>
  `,
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {

  users: User[];
  showToast = false;

  onDelete(userToDelete: User) {

    if (confirm("are you sure?")) {
      this.userService.deleteUser(userToDelete.id)
      .subscribe(() => {

        let index = this.users.findIndex(user => userToDelete.id == user.id)
        this.users.splice(index, 1);
        // replace with a toast
        this.showToast = true;

      });

    }
  }


  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe(users=>this.users=users);
  }

}
