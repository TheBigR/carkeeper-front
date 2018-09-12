import { Injectable } from '@angular/core';
import {User} from '../models/user';
import {USERS} from './mocks';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  getUsers(): User[] {
    return USERS;
  }
}
