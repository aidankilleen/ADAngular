import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'user',
  template: `<div>
      <h2>Add User</h2>   
      Name:<input [(ngModel)]="user.name"><br>
      Email:<input [(ngModel)]="user.email"><br>
      Active:<input type="checkbox" [(ngModel)]="user.active"><br>
      <button (click)="onSave()">Save</button>
    </div>`,
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user:User = new User();
  @Output() saved = new EventEmitter();
  constructor() { }

  onSave() {
    this.saved.emit(this.user);
  }
  ngOnInit(): void {
  }

}
