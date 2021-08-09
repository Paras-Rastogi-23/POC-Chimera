import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Poc } from 'src/app/models/poc.model';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userlist  = this.userModel.userList;
  userName  = ''; 

  constructor(private router : Router,
    private userService : UserServiceService,
    private userModel : Poc,
    private toastrService : ToastrService) { }

  ngOnInit(): void {
    this.getUserName();
    this.userlist = JSON.parse(localStorage.getItem('users'));
    //console.log(this.userlist,"userList");
  }

  getUserName(){
    this.userName = JSON.parse(localStorage.getItem('userName'));
    //console.log(this.userName,' - Logged In UserName');
  }

  deleteUser(number:number){
    this.userlist = JSON.parse(localStorage.getItem('users'));
    
    var result = confirm("Want to delete?");
    if (result) {
      this.userlist.splice(number);
      localStorage.setItem('users',JSON.stringify(this.userlist));
      this.toastrService.success("User Deleted Successfuly","Error",{
        timeOut:7000,
        });
    }
  }

  Update(index:number){
    this.router.navigate(['/update',index]);
  }
}
