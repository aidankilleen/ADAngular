import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'user',
  template: `<div>
      <h2>{{ title }}</h2>   
      Name:<input [(ngModel)]="user.name"><br>
      Email:<input [(ngModel)]="user.email"><br>
      Active:<input type="checkbox" [(ngModel)]="user.active"><br>
      <button class="btn btn-primary" (click)="onSave()">Save</button>
      <button class="btn btn-secondary" (click)="onCancel()">Cancel</button>
    </div>`,
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() title: string = "Add User";
  @Input() user:User = new User();
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  constructor() { }

  onCancel() {
    this.cancelled.emit();
  }
  onSave() {
    this.saved.emit(this.user);
  }
  ngOnInit(): void {
  }

}
