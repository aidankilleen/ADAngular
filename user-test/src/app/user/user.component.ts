import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'user',
  template: `
    <div *ngIf="!editing; else editingView" [ngClass]="{
            'active':user.active, 
            'inactive':!user.active
          }">
      {{ user.id }}


      <h3>{{ user.name }}</h3>
      <a href="mailto:{{ user.email }}">
        {{ user.email }}
      </a>

      <hr>
    </div>

    <ng-template #editingView>
      <div>
          Name:<input type="text" [(ngModel)]="editingUser.name"><br>
          Email:<input type="text" [(ngModel)]="editingUser.email"><br>
          Active:<input type="checkbox" [(ngModel)]="editingUser.active"><br>
      </div>
    </ng-template>

    <button *ngIf="!editing" (click)="onEdit()">
      Edit
    </button>
    <button *ngIf="editing" (click)="onSave()">
      Save
    </button>
    <button *ngIf="editing" (click)="onCancel()">
      Cancel
    </button><br>
<!--
    {{ user | json }}<br>
    {{ editingUser | json }}<br>
    <hr>
        -->

  `,
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  editing: boolean = false;
  @Input() user:User = new User(0, "", "", false);

  @Output() saved = new EventEmitter();

  editingUser:User = new User(0, "", "", false);
  
  onCancel() {
    this.editing = false;
  }
  onSave() {
    this.editing = false;
    this.user = this.editingUser;
    this.saved.emit(this.user);
  }
  onEdit() {
    this.editing = true;
    this.editingUser = new User(this.user.id, 
                                this.user.name, 
                                this.user.email, 
                                this.user.active);
  }
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
