import { Component, OnInit } from '@angular/core';
import { User } from "../user";
import { UserService } from "../user.service";

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];

  constructor(
    private userService: UserService,
  ) { 
  }

  selectedUser: User;


  onSelectUser(user) {
    this.selectedUser = user;
  }


  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      this.users = data;
    })
  }

}
