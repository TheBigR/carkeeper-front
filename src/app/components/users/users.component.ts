import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    id: 'hardcoded',
    role: 'Admin',
    userName: 'local',
    password: 'qwerty',
    email: 'noemail@gmail.com'
  };
  users: User[];
  selectedUser: User;
  onSelect(user: User): void {
    this.selectedUser = user;
  }

  constructor(private userService: UserService) { }
  getUsers(): void {
    this.users = UserService.getUsers();
  }


  ngOnInit() {
    this.getUsers();
  }


}
