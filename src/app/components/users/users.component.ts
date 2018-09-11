import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { USERS} from '../../services/mocks';

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
  users = USERS;
  selectedUser: User;
  onSelect(user: User): void {
    this.selectedUser = user;
  }

  constructor() { }

  ngOnInit() {
  }


}
