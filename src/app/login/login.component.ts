import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
// DATABASE
db:any={
  1000:{"userid":1000,"username":"akhil kumar","password":1000},
  1002:{"userid":1002,"username":"ajin sam","password":1002},
  1003:{"userid":1003,"username":"Rijo Rajan","password":1003},
  

}
  constructor(private router:Router) { }

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
  let db=this.db
  if(usid in db){
    if(pswd==db[usid]["password"]){
      alert("login Sucessfull")
      this.router.navigateByUrl("Dashboard")
    }
    else{
      alert("incorrect password")
    }
  }
  else{
    alert("user does not exisist")
  }
  }
}
