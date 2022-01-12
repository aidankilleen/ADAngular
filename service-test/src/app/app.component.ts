import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  template: `<h1>Users</h1>
  
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Active</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let user of users">
          <td>{{user.id}}</td>
          <td>{{user.name}}</td>
          <td>{{user.email}}</td>
          <td>{{user.active ? 'Active' : 'Inactive'}}</td>
          <td>
            <button (click)="onDelete(user.id)">X</button>
          </td>
        </tr>
      </tbody>

    </table>
    <user *ngIf="adding" 
          [user]="newUser"
          (saved)="onSaved($event)">

    </user>
    <button (click)="onAdd()">Add User</button>
    <button (click)="onClick()">Test Ajax Call</button>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {  
  title = 'service-test';
  users: User[] = [];
  adding = false;
  newUser: User = new User();

  onSaved(newUser:User) {
    // TBD - need to make the ajax call
    this.userService.addUser(newUser)
    .subscribe((addedUser)=> {
      this.users.push(addedUser);
      this.newUser = new User();
      this.adding = false;
  
    })

  }
  onAdd() {
    this.adding = true;
    this.newUser = new User();
  }
  onDelete(id: number) {
    if (confirm(`you clicked delete ${id}`)) {

      this.userService.deleteUser(id)
        .subscribe(() => {
          let index = this.users.findIndex(user=>user.id == id);
          this.users.splice(index, 1);
        });
    }
  }
  onClick() {
    this.userService.testHttpRequest();
  }
  
  constructor(public userService: UserService) {
  }

  ngOnInit(): void {
    console.log("ngOnInit() called");
    
    this.userService.getUsers()
      .subscribe(users => {
        this.users = users;
      });
  }
}
