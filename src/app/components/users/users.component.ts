import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    id: 'first',
    role: 'Admin',
    userName: 'Royke',
    password: 'qwerty',
    email: 'noemail@gmail.com'
  };

  constructor() { }

  ngOnInit() {
  }


}
