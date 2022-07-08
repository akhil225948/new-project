import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
// CLASS PROPERTYS
aim="We Are"
userid="UserId please"
password="password please"
usid=""
pswd=""
// dependency Injection
  constructor(private router:Router,private ds:DataService) { }

  ngOnInit(): void {
  }


  // USERDEFINED FUNCTION

  userIdchange(event:any){
    this.usid=event.target.value
    console.log(this.usid);
  }
passwordchange(event:any){
  this.pswd=event.target.value
  console.log(this.pswd);

}
  login(){
  var usid=this.usid
  var pswd=this.pswd
  const result=this.ds.login(usid,pswd)

  if(result){
      alert("login Sucessfull")
      this.router.navigateByUrl("Dashboard")
  }
  }
}