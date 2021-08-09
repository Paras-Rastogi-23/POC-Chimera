import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Poc } from 'src/app/models/poc.model';
import { UserServiceService } from 'src/app/services/user-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  condition:boolean=false;
  loginDetails = this.userModel.userLoginModel;
  

  constructor(private router : Router,
    private userService : UserServiceService,
    private userModel : Poc,
    private toastrService : ToastrService) { }

  ngOnInit(): void {
  }

  doLogin(){
    if(this.loginDetails.username == ''){
      alert("mention the credentials properly");
    }
    this.condition = this.userService.loginUser(this.loginDetails.username,this.loginDetails.password).success;
    if(this.condition){
      
      //console.log('login successful')
      this.toastrService.success("Login Successful","Success",{
        timeOut:5000,
      });
      this.router.navigate(['/home']);

    }else{
      //console.log("wrong Credentials");
      this.toastrService.error("Login Failed due to Wrong Credentials","Error",{
        timeOut:7000,
      });
    }
    
  }

}
