import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
username:any
password:any
message:any
loginfun(){
  if(this.username=='admin' && this.password=="12345"){
    this.message="successfully logined as  " +this.username
  }
  else{
    this.message="please enter correct username and password"
  }
}
display = true

}
