import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
// DATABASE
db:any={
  1000:{"userid":1000,"username":"akhil kumar","password":1000},
  1002:{"userid":1002,"username":"ajin sam","password":1002},
  1003:{"userid":1003,"username":"Rijo Rajan","password":1003},
  

}
  constructor() { }
  login(usid:any,pswd:any){

    let db=this.db
    if(usid in db){
      if(pswd==db[usid]["password"]){
        return true
        
      }
      else{
        alert("incorrect password")
        return false
      }
    }
    else{
      alert("user does not exisist")
      return false
    }
    }
  }

