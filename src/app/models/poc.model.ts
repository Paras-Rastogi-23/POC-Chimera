import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class Poc {
    userLoginModel = {
        username: '',
        password: ''
    };

    userList = [
        {
            username  :   '' ,
            firstName :   '' ,
            lastName  :   '' ,
            password  :   '' ,
        }
    ]

    addUser = {
        username  :   '' ,
        firstName :   '' ,
        lastName  :   '' ,
        password  :   '' ,
    }

    updateUserDetails = {
        username  :   '' ,
        firstName :   '' ,
        lastName  :   '' ,
        password  :   '' ,
    }

    getUserDetail = {
        username  :   '' ,
        firstName :   '' ,
        lastName  :   '' ,
        password  :   '' ,
    }
}
