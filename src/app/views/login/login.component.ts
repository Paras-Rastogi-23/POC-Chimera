import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  returnUrl : string ='';
  

  constructor(private router : Router,
    private userService : UserServiceService,
    private userModel : Poc,
    private toastrService : ToastrService,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
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
      this.router.navigate([this.returnUrl]);

    }else{
      //console.log("wrong Credentials");
      this.toastrService.error("Login Failed due to Wrong Credentials","Error",{
        timeOut:7000,
      });
    }
  }

}
