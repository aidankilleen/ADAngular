import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'user',
  template: `
    <table>
      <tr>
        <th>Id</th><td>{{ user.id }}</td>
      </tr>
      <tr>
        <th>Name</th><td>{{ user.name }}</td>
      </tr>
      <tr>
        <th>Email</th><td>{{ user.email }}</td>
      </tr>
      <tr>
        <th>Active</th><td>{{ user.active ? 'Active': 'Inactive' }}</td>
      </tr>
    </table>
  `,
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user: User;
  constructor() { }

  ngOnInit(): void {
  }

}
