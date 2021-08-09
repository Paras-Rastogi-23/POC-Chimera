import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Poc } from 'src/app/models/poc.model';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  signUpDetails = this.userModel.addUser;
  user:any;
  validationCondition:boolean=true
  constructor(private router : Router,
    private userService : UserServiceService,
    private userModel : Poc,
    private toastrService : ToastrService) { }

  ngOnInit(): void {
  }


  doSignUp(){
    this.validationCondition = this.userService.registerUser(this.signUpDetails).success;
    if(this.validationCondition){
      this.toastrService.success("Register Successful","Error",{
      timeOut:5000,
      });
      this.router.navigate(['/login']);
    }
    
    else{
      this.toastrService.error("User Already Exist","Error",{
      timeOut:7000,
      });
    }
  }

}
