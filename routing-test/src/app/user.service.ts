import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url="http://localhost:3000/users";

  constructor(public httpClient: HttpClient) { 
  }

  getUsers(): Observable<User[]> {
    return this.httpClient
      .get(this.url) as Observable<User[]>;
  }  

  getUser(id: number): Observable<User> {
    return this.httpClient  
      .get(`${this.url}/${id}`) as Observable<User>;
  }

  deleteUser(id: number) {
    return this.httpClient  
      .delete(`${this.url}/${id}`);
  }
}
