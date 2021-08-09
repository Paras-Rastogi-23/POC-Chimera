import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Poc } from 'src/app/models/poc.model';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  addNewDetails = this.userModel.addUser;
  user:any;
  validationCondition : boolean=true;
  constructor(private router : Router,
    private userService : UserServiceService,
    private userModel : Poc,
    private toastrService : ToastrService) { }

  ngOnInit(): void {
  }

  addNew(){
    this.validationCondition = this.userService.registerUser(this.addNewDetails).success;
    if(this.validationCondition){
      
      this.toastrService.success("Register Successful","Error",{
      timeOut:5000,
      });
    }
    else{
      this.toastrService.error("User Already Exist","Error",{
      timeOut:7000,
      });
    }
  }

}
