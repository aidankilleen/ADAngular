import { Component } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  template: `<h1>{{ title }}</h1>

{{ users | json }}
  <user 
    *ngFor="let user of users" 
    [user]="user"
    (saved)=onSave($event)
    >
  </user>
  
  {{ name }}
  <hr>
  <input #txtName type="text" [value]="name" (keyup)="onChange(txtName.value)"><br>
  <button (click)="name = 'Aidan'">Reset Name</button>

  <hr>
  {{ name }}

  <hr>

  <input #txtName2 type="text" [value]="name" (keyup)="onChange(txtName2.value)"><br>



  <hr>
  <input [(ngModel)]="county"><br>
  {{ county }}
  <hr>
  <button (click)="county='Limerick'">
    Reset County
  </button>

  <hr>

  <!-- two way data-binding -->
  <input [(ngModel)]="a" type="number"><br>
  <input [(ngModel)]="b" type="number"><br>
  <hr>
  {{ a + b }}



  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  a: number = 0;
  b: number = 0;

  county: string = "Cork";

  name: string = "Aidan";

  onSave(updatedUser:User) {
    // update the users list with updatedUser
    let index = this.users.findIndex(user => user.id == updatedUser.id);
    this.users.splice(index, 1, updatedUser);

  }
  onChange(changedName: string) {
    console.log("onChange()");
    console.log(changedName);
    this.name = changedName;

  }

  title = 'User Test';

  users: User[] = [
    new User(1,"Alice", "alice@gmail.com", false), 
    new User(2,"Bob", "bob@gmail.com", true), 
    new User(3,"Carol", "carol@gmail.com", true), 
    new User(4,"Dan", "dan@gmail.com", false)
  ];
}
