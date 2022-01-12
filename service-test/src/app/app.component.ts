import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {  
  title = 'service-test';
  users: User[] = [];
  adding = false;
  editing = false;
  newUser: User = new User();
  userToEdit: User = new User();

  constructor(public userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe(users => {
        this.users = users;
      });
  }

  onCancelEdit() {
    this.editing = false;
  }

  onCancelAdd() {
    this.newUser = new User();
    this.adding = false;
  }

  onEdit(userToEdit: User) {
    // this.usertoEdit = userToEdit -> reference to the item in the list

    // make a clone of the item in the list so that changes 
    // are only saved when the "save" button is pressed
    this.userToEdit = new User( 
          userToEdit.id, 
          userToEdit.name, 
          userToEdit.email, 
          userToEdit.active);
    this.editing = true;
  }

  onUpdated(userToUpdate: User) {
    this.userService.updateUser(userToUpdate)
      .subscribe(updatedUser=>{
        let index = this.users.findIndex(user => user.id == updatedUser.id);
        this.users.splice(index, 1, updatedUser);
        this.userToEdit = new User();
        this.editing = false;
      });
  }

  onSaved(newUser:User) {
    this.userService.addUser(newUser)
      .subscribe((addedUser)=> {
        this.users.push(addedUser);
        this.newUser = new User();
        this.adding = false;
      });
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
}
