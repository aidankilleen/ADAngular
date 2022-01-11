import { Component } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  template: `<h1>{{ title }}</h1>
  
    <user *ngFor="let user of users" [user]="user">
      
    </user>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'User Test';

  users: User[] = [
    new User(1,"Alice", "alice@gmail.com", false), 
    new User(2,"Bob", "bob@gmail.com", true), 
    new User(3,"Carol", "carol@gmail.com", true), 
    new User(4,"Dan", "dan@gmail.com", false)
  ];
}
