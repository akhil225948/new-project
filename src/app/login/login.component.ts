import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
// class propertys
aim="We Are"
userid="UserId please"
password="password please"
Login="Login please"
// DATABASE
db={
  1000:{"userid":1000,"username":"akhil kumar","password":1000},
  1002:{"userid":1002,"username":"ajin sam","password":1002},
  1003:{"userid":1003,"username":"Rijo Rajan","password":1003},
  

}
  constructor() { }

  ngOnInit(): void {
  }


  // USERDEFINED FUNCTION
}
