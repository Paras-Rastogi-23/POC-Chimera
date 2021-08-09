import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Poc } from '../models/poc.model';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  users: IUsers[] = [];
  userName:string = '';
  isAuthenticate : boolean=false;

  constructor(private router: Router) { }

  registerUser(data: IUsers) {
    if (localStorage.getItem('users') != null) {
      this.users = JSON.parse(localStorage.getItem('users'));
      if (this.users.find(item => item.username == data.username)) {
        console.log('user already exists')
        return { success: false}
      }
      else{
        this.users.push(data);
        localStorage.setItem('users', JSON.stringify(this.users));
        return { success: true}
      }
    }
    else {
      this.users.push(data);
      console.log('Registration successfull.')
      localStorage.setItem('users', JSON.stringify(this.users));
      return { success: true};
    }
    
  }

  loginUser(username: string, password: string) {
    localStorage.setItem('userName',JSON.stringify(username));
    if (localStorage.getItem('users') != null) {
      this.users = JSON.parse(localStorage.getItem('users'));
    }
    let currentUser = this.users.find(
      (item) => item.username == username && item.password == password);

    if (currentUser) {
      this.isAuthenticate = true
      return { success: true}
    }
    return { success: false}
  }
}

export interface IUsers {
  username: string;
  firstName: string;
  lastName: string;
  password: string;
}