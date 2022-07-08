import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
date=""
description=""
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  addevent(){
    alert("Event added")
  }
  viewevent(){
    alert("Events viewing !!!")
    this.router.navigateByUrl('eventform')

    
  }

}
