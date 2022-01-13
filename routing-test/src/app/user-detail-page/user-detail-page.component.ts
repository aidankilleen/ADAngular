import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail-page',
  template: `
    <h1>User Detail</h1>
    <user [user]="user"></user>
  `,
  styleUrls: ['./user-detail-page.component.css']
})
export class UserDetailPageComponent implements OnInit {

  userId: number;
  user: User;

  constructor(private route: ActivatedRoute, 
              private userService: UserService) { 
    this.route.params.subscribe(params => {
      this.userId = params['id'];
      this.userService.getUser(this.userId)
        .subscribe(user => this.user = user);
    });
  }

  ngOnInit(): void {
  }
}
