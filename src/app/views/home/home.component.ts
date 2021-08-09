import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userName :'';

  constructor() { }

  ngOnInit(): void {
    this.getUserName();
  }

  getUserName(){
    this.userName = JSON.parse(localStorage.getItem('userName'));
    //console.log(this.userName,' - Logged In UserName');
 }
}
