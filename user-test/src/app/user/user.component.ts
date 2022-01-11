import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'user',
  template: `
    <div [ngClass]="{
            'active':user.active, 
            'inactive':!user.active
          }">
      {{ user.id }}
      <h3>{{ user.name }}</h3>
      <a href="mailto:{{ user.email }}">
        {{ user.email }}
      </a>
      {{ user.active ? "Active" : "Inactive" }}
      <hr>
    </div>
  `,
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user:User = new User(0, "", "", false);
  constructor() { }

  ngOnInit(): void {
  }

}
