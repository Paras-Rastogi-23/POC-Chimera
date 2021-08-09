import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Poc } from 'src/app/models/poc.model';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  updateDetails  = this.userModel.updateUserDetails;
  indexId : number = 0;
  userDetails = this.userModel.userList;

  updateForm : FormGroup

  constructor(private router : Router,
    private userService : UserServiceService,
    private userModel : Poc,
    private route : ActivatedRoute,
    private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.indexId = +this.route.snapshot.paramMap.get('id');
    this.getUserDetails();
    this.createForm();
  }

  getUserDetails(){
    this.updateDetails = JSON.parse(localStorage.getItem('users'))[this.indexId];
    //console.log(this.updateDetails,"details to be updated");
  }

  doUpdate(){
    let confirmation = confirm("Do you want to Update the user ?");
     if(confirmation)
    {
     this.userDetails = JSON.parse(localStorage.getItem('users'));
     this.userDetails[this.indexId] = this.updateForm.value;
     localStorage.setItem('users' , JSON.stringify(this.userDetails));
     this.router.navigate(['/users']);
    }     
  }

  createForm(){
    this.updateForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      password: ['', [Validators.required]],
     });
  }

  getUpdate(){
   

  }

  get formControls() {
    return this.updateForm.controls;
  }

}
