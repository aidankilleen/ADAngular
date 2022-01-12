import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [
    new User(1,"Alice", "alice@gmail.com", false), 
    new User(2,"Bob", "bob@gmail.com", true), 
    new User(3,"Carol", "carol@gmail.com", true), 
    new User(4,"Dan", "dan@gmail.com", false)
  ];

  url = "http://localhost:3000/users";

  constructor(private httpClient: HttpClient) { 
  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get(this.url) as Observable<User[]>;
  }
  deleteUser(id: number) {
    return this.httpClient.delete(`${this.url}/${id}`);
  }

  testHttpRequest() {
    this.httpClient.get(this.url)
      .subscribe((data)=>{
        console.log(data);
      });
  }
}
