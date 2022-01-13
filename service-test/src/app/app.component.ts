import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
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
  modal: NgbModalRef;


  constructor(public userService: UserService, 
              public modalService: NgbModal) {
  }

  
  onAdd(content: any) {

    this.newUser = new User();
    this.modal = this.modalService.open(content);
    this.modal.result
    .then(result => {
      console.log("modal closed");
      // called if modal.close is called
      //alert(result);
    })
    .catch(reason => {
      // called if x, esc or click off modal
      //alert(reason);
    });
  }
  
  onSaved(newUser:User) {
    console.log("saving the new user...");
    this.userService.addUser(newUser)
      .subscribe((addedUser)=> {
        this.users.push(addedUser);
        this.newUser = new User();

        // close the modal 
        this.modal.close("closed");

      });
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

  onEdit(userToEdit: User, content: any) {
    // this.usertoEdit = userToEdit -> reference to the item in the list

    // make a clone of the item in the list so that changes 
    // are only saved when the "save" button is pressed
    this.userToEdit = new User( 
          userToEdit.id, 
          userToEdit.name, 
          userToEdit.email, 
          userToEdit.active);
    this.editing = true;
    this.modal = this.modalService.open(content);

  }

  onUpdated(userToUpdate: User) {
    this.userService.updateUser(userToUpdate)
      .subscribe(updatedUser=>{
        let index = this.users.findIndex(user => user.id == updatedUser.id);
        this.users.splice(index, 1, updatedUser);
        this.userToEdit = new User();
        this.editing = false;
        this.modal.close("updated");
      });
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
